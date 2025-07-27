import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleForm = async (event) => {
        event.preventDefault();

        const rawResponse = await fetch('/api/auth/adminlogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const response = await rawResponse.json();
        console.log(response.token);
        if(response.token){ 
            window.localStorage.setItem("token", response.token);
            setRedirect(true);
        };
        setMessage(response.message);
        console.log(response.login);
    }

    if(redirect){
        return <Navigate to="/admin/panel" />;
    }

    return (
        <>
            
            <h1>Admin Login</h1>
            <form onSubmit={handleForm}>
                <label>username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" />
            </form>

            <p>{ message }</p>
        </>
    );
}

export default Login;