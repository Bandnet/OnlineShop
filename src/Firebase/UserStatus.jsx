import { useContext } from "react";
import { AuthContext } from "./AuthProvider.jsx";
import { logout } from "./auth.js"; // Import your logout function

export default function UserStatus() {
    const { user } = useContext(AuthContext);

    return (
        <div style={{ padding: "10px", border: "1px solid #ccc" }}>
            {user ? (
                <>
                    <p>Logged in as: <strong>{user.email}</strong></p>
                    <button onClick={logout}>Sign Out</button>
                </>
            ) : (
                <p>You are <strong>not</strong> logged in.</p>
            )}
        </div>
    );
}