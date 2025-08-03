import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CustomerRequestItem from "./CustomerRequestItem.js";


const AdminPanel = () => {
    const [homeRedirect, setHomeRedirect] = useState(false);
    const [customerRequests, setCustomerRequests] = useState([]);

    const logout = () => {
        window.localStorage.removeItem("token");
        setHomeRedirect(true);
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        const reqCustomerRequests = async () => {
            const result = await fetch('/api/customerRequest/getCustomerRequests', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const res = await result.json();
            setCustomerRequests(res);
        }
        reqCustomerRequests();
    }, [])

    if(homeRedirect){
        return <Navigate to="/" />;
    }

    return (
        <>
            <h1>hier ist adminpanel</h1>
            <button onClick={logout}>Logout</button>

            <h2>Kundenanfragen</h2>
            {customerRequests && customerRequests.map((item) => {
                return <CustomerRequestItem requestItem={item}></CustomerRequestItem>
            })}
        </>
    )
}

export default AdminPanel;