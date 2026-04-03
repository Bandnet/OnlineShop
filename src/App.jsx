import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { logout } from "./auth";

import HomePage from "./HomePage.jsx";
import SalePage from "./SalePage.jsx";
import { LoginPage } from "./LoginPage.jsx";
import CheckoutPage from "./CheckoutPage.jsx";
import { RegisterPage }from "./RegisterPage.jsx"; // Achte auf korrekte Schreibweise
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/Sale">Sale</Link> |
                    {user ? (
                        <>
                            <Link to="/Checkout">Checkout</Link> |
                            <button onClick={logout}>Logout ({user.email})</button>
                        </>
                    ) : (
                        <>
                            <Link to="/Login">Login</Link> |
                            <Link to="/Register">Register</Link>
                        </>
                    )}
                </nav>

                <h2>Online Shop</h2>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Sale" element={<SalePage />} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/Register" element={<RegisterPage />} />
                    <Route path="/Checkout" element={
                        <ProtectedRoute>
                            <CheckoutPage />
                        </ProtectedRoute>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;