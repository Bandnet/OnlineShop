import React from "react"
import { useState } from "react";
import { login } from "./auth";

export function LoginPage (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try{
            await login(email, password);
            alert("Erfolgreich eingeloggt");
        } catch (err) {
            alert(err.message);
        }
    };

    return(
        <div>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default LoginPage;