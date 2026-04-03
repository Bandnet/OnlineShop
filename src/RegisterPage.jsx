import React, { useState } from "react";
import { register } from "./auth"; // Your helper function

export function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await register(email, password);
            alert("User created successfully!");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <div>
            <h2>Create Account</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Sign Up</button>
        </div>
    );
}