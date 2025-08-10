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
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }

            const res = await result.json();

            
            setCustomerRequests(Array.isArray(res) ? res : []);
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
            if(!result.ok){
                throw new Error(`HTTP error! Status: ${result.status}`)
            }
            const res = await result.json();
            setChecklistEntrys(Array.isArray(res) ? res : []);
        }
        reqChecklistEntrys();
    }, [])

    if(homeRedirect){
        return <Navigate to="/" />;
    }

    return (
        <>
            <h1 className="text-2xl text-center text-[#093B3F] font-bold md:mb-5">Kundenanfragen</h1>
            <center><button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg" onClick={logout}>Logout</button></center>

            <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">Kundenanfragen aus /kontakt</h2>
            {customerRequests && customerRequests.map((item) => {
                return <CustomerRequestItem requestItem={item}></CustomerRequestItem>
            })}

            <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">Checklistanfragen aus /checklist</h2>
            {checklistEntrys && checklistEntrys.map((item) => {
                return <ChecklistEntry item={item}></ChecklistEntry>
            })}
        </>
    )
}

export default AdminPanel;