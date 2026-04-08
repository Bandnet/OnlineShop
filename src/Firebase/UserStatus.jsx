import { useContext } from "react";
import { AuthContext } from "./AuthProvider.jsx";
import { logout } from "./auth.js";
import "./UserStatus.css"; // Neue CSS-Datei importieren

export default function UserStatus() {
    const { user } = useContext(AuthContext);

    return (
        <div className="user-status-container">
            {user ? (
                <div className="user-logged-in">
                    <div className="user-info">
                        <span className="user-label">AUTH_USER:</span>
                        <strong className="user-email">{user.email}</strong>
                    </div>
                    <button className="user-logout-btn" onClick={logout}>
                        [LOGOUT]
                    </button>
                </div>
            ) : (
                <div className="user-logged-out">
                    <span className="status-dot"></span>
                    <p>STATUS: <strong>OFFLINE</strong></p>
                </div>
            )}
        </div>
    );
}