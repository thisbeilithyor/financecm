import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CustomerRequestItem from "./CustomerRequestItem.jsx";
import ChecklistEntry from "./ChecklistEntry.jsx";

const AdminPanel = () => {
    const [homeRedirect, setHomeRedirect] = useState(false);
    const [customerRequests, setCustomerRequests] = useState([]);
    const [checklistEntrys, setChecklistEntrys] = useState([]);

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

        const reqChecklistEntrys = async () => {
            const result = await fetch('/api/checklist/getAll', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const res = await result.json();
            setChecklistEntrys(res);
        }
        reqChecklistEntrys();
    }, [])

    if(homeRedirect){
        return <Navigate to="/" />;
    }

    return (
        <>
            <h1>hier ist adminpanel</h1>
            <button onClick={logout}>Logout</button>

            <h2>Kundenanfragen aus /kontakt</h2>
            {customerRequests && customerRequests.map((item) => {
                return <CustomerRequestItem requestItem={item}></CustomerRequestItem>
            })}

            <h2>Checklistanfragen aus /checklist</h2>
            {checklistEntrys && checklistEntrys.map((item) => {
                return <ChecklistEntry item={item}></ChecklistEntry>
            })}
        </>
    )
}

export default AdminPanel;