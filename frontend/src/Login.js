import { useState, useEffect } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = async (event) => {
        const rawResponse = await fetch('/api/admin/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: {username}, password: {password}})
        });
        const response = await rawResponse.json();
        console.log(response);
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
        </>
    );
}

export default Login;