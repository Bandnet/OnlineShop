import React, { useState } from "react";
import { login } from "../Firebase/auth.js";
import "./AuthPages.css";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await login(email, password);
            alert("Erfolgreich eingeloggt");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <h2 className="auth-title">Willkommen zurück</h2>
                    <p className="auth-subtitle">Logge dich in deinen Account ein</p>
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

                <button className="auth-btn" onClick={handleLogin}>
                    Einloggen
                </button>

                <p className="auth-switch">
                    Noch kein Konto? <a href="#/Register">Registrieren</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;