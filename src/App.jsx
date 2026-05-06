import './App.css';
import { HashRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./Firebase/AuthProvider.jsx";
import { logout } from "./Firebase/auth.js";
import Footer from "./Footer.jsx";
import { CartProvider } from "./AuthPages/CartContext.jsx";   // NEU

import HomePage from "./ShoppingPages/HomePage.jsx";
import SalePage from "./ShoppingPages/SalePage.jsx";
import { LoginPage } from "./AuthPages/LoginPage.jsx";
import CheckoutPage from "./AuthPages/CheckoutPage.jsx";
import { RegisterPage } from "./AuthPages/RegisterPage.jsx";
import ProtectedRoute from "./Firebase/ProtectedRoute.jsx";
import ProduktDetailPage from "./ShoppingPages/ProduktDetailPage.jsx";
import OccasionPage from "./ShoppingPages/OccasionPage.jsx";

const navClass = ({ isActive }) => isActive ? "active" : "";

function App() {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <CartProvider>          {/* NEU */}
                <div>
                    <div className="Navigation">
                        <nav>
                            <Link to="/"><h2>Online Shop</h2></Link>
                        </nav>
                        <nav>
                            <NavLink to="/" className={navClass} end>Home</NavLink>
                            <NavLink to="/Sale" className={navClass}>Sale</NavLink>
                            <NavLink to="/Occasion" className={navClass}>Occasion</NavLink>
                            {user ? (
                                <>
                                    <NavLink to="/Checkout" className={navClass}>Checkout</NavLink>
                                    <button onClick={logout}>Logout ({user.email})</button>
                                </>
                            ) : (
                                <>
                                    <NavLink to="/Login" className={navClass}>Login</NavLink>
                                    <NavLink to="/Register" className={navClass}>Register</NavLink>
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
            </CartProvider>         {/* NEU */}
        </Router>
    );
}

export default App;