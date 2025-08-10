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
            
            <h1 className="text-4xl text-[#E9D3AD] text-center font-bold mt-3 mb-3">Admin Login</h1>
            <form
                onSubmit={handleForm}
                className="bg-[#093B3F] p-8 rounded-lg w-[30vw] m-auto space-y-4 text-white"
                >
                <div>
                    <label className="block mb-1">Username</label>
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
                    />
                </div>

                <div>
                    <label className="block mb-1">Password</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-white rounded-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
                    />
                </div>

                <input
                    type="submit"
                    value="Login"
                    className="w-full border border-white rounded-full px-3 py-2 text-[#093B3F] bg-white text-lg font-semibold hover:bg-gray-100 transition cursor-pointer"
                />
            </form>
            <p>{ message }</p>
        </>
    );
}

export default Login;