import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./Firebase/AuthProvider.jsx";
import { logout } from "./Firebase/auth.js";
import Footer from "./Footer.jsx";

import HomePage from "./ShoppingPages/HomePage.jsx";
import SalePage from "./ShoppingPages/SalePage.jsx";
import { LoginPage } from "./AuthPages/LoginPage.jsx";
import CheckoutPage from "./AuthPages/CheckoutPage.jsx";
import { RegisterPage }from "./AuthPages/RegisterPage.jsx"; // Achte auf korrekte Schreibweise
import ProtectedRoute from "./Firebase/ProtectedRoute.jsx";
import ProduktDetailPage from "./ShoppingPages/ProduktDetailPage.jsx"
import OccasionPage from "./ShoppingPages/OccasionPage.jsx"

function App() {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <div className="Navigation">

                    <h2>Online Shop</h2>

                    <nav>
                        <Link to="/">Home</Link>  <Link to="/Sale">Sale</Link>  <Link to="/Occasion">Occasion</Link>
                        {user ? (
                            <>
                                <Link to="/Checkout">Checkout</Link>
                                <button onClick={logout}>Logout ({user.email})</button>
                            </>
                        ) : (
                            <>
                                <Link to="/Login">Login</Link>
                                <Link to="/Register">Register</Link>
                            </>
                        )}
                    </nav>
                </div>

                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/Sale" element={<SalePage/>}/>
                    <Route path="/Occasion" element={<OccasionPage/>}/>
                    <Route path="/Login" element={<LoginPage/>}/>
                    <Route path="/Register" element={<RegisterPage/>}/>
                    <Route path="/produkt/:id" element={<ProduktDetailPage/>}/>
                    <Route path="/Checkout" element={
                        <ProtectedRoute>
                            <CheckoutPage/>
                        </ProtectedRoute>
                    }/>
                </Routes>

                <Footer/>

            </div>
        </Router>
    );
}

export default App;