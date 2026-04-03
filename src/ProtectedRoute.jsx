import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function ProtectedRoute({children}) {
    const {user} = useContext(AuthContext)

    if (!user) return <p>Bitte einloggen</p>;

    return children;
}