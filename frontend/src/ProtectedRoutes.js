import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


const ProtectedRoutes = () => {
    const [permission, setPermission] = useState(false);
    const [loading, setLoading] = useState(true);
    const token = window.localStorage.getItem("token");
    useEffect(() => {
        fetch('/api/verifyJWT', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(async (rawResponse) => {
            const res = await rawResponse.json();
            const a = res.verified;
            a ? setPermission(true) : setPermission(false);
            setLoading(false);
        }
        )
    }, [token]);

    if(loading){
        return <p>Laden... Berechtigung überprüfen...</p>
    }
    return permission ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;