import React, { useState } from "react";
import { register } from "../Firebase/auth.js";
import "./AuthPages.css";

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
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <h2 className="auth-title">Account erstellen</h2>
                    <p className="auth-subtitle">Registriere dich für den OnlineShop</p>
                </div>

                <div className="auth-fields">
                    <div className="auth-field">
                        <label className="auth-label">E-Mail</label>
                        <input
                            className="auth-input"
                            type="email"
                            placeholder="deine@email.ch"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="auth-field">
                        <label className="auth-label">Passwort</label>
                        <input
                            className="auth-input"
                            type="password"
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button className="auth-btn" onClick={handleRegister}>
                    Registrieren
                </button>

                <p className="auth-switch">
                    Bereits ein Konto? <a href="#/Login">Einloggen</a>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;