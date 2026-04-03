import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./Firebase/AuthProvider.jsx";
import { logout } from "./Firebase/auth.js";
import Footer from "./Footer.jsx";

import HomePage from "./ShoppingPages/HomePage.jsx";
import SalePage from "./ShoppingPages/SalePage.jsx";
import { LoginPage } from "./AuthPages/LoginPage.jsx";
import CheckoutPage from "./CheckoutPage.jsx";
import { RegisterPage }from "./AuthPages/RegisterPage.jsx"; // Achte auf korrekte Schreibweise
import ProtectedRoute from "./Firebase/ProtectedRoute.jsx";
import ProduktDetailPage from "./ShoppingPages/ProduktDetailPage.jsx"

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
                    <Route path="/produkt/:id" element={<ProduktDetailPage />} />
                    <Route path="/Checkout" element={
                        <ProtectedRoute>
                            <CheckoutPage />
                        </ProtectedRoute>
                    } />
                </Routes>

                <Footer/>

            </div>
        </Router>
    );
}

export default App;