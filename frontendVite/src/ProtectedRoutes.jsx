import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


const ProtectedRoutes = () => {
    const [permission, setPermission] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verify_authorization = async () => {
            const rawResponse = await fetch('/api/auth/verifyJWT', {
                method: 'POST'
            })
            
            const status = rawResponse.status;

            if(status === 200) {
                setPermission(true);
                setLoading(false);
            } else {
                setPermission(false);
                setLoading(false);
            }
        }

        verify_authorization();

    }, [])

    if(loading){
        return <p>Laden... Berechtigung überprüfen...</p>
    }
    return permission ? <Outlet /> : <Navigate to="/admin" />;
}

export default ProtectedRoutes;