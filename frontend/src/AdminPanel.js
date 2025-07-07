import { useState } from "react";
import { Navigate } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";

const AdminPanel = () => {
    const [homeRedirect, setHomeRedirect] = useState(false);

    const logout = () => {
        window.localStorage.removeItem("token");
        setHomeRedirect(true);
    }

    if(homeRedirect){
        return <Navigate to="/" />;
    }

    return (
        <>
            <h1>hier ist adminpanel</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default AdminPanel;