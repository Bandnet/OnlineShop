import React from "react";
import UserStatus from "../Firebase/UserStatus.jsx";
import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

function CheckoutPage() {
    const { cartItems, removeFromCart, updateMenge, subtotal } = useCart();
    const navigate = useNavigate();

    const TAX_RATE = 0.081;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    return (
        <div className="checkout-page">
            <div className="checkout-container">

                {/* Header */}
                <header className="checkout-header">
                    <h1 className="checkout-title">TERMINAL_CHECKOUT</h1>
                    <div className="system-status">
                        <span className="status-indicator">SECURE_CONNECTION: ACTIVE</span>
                    </div>
                </header>

                <div className="checkout-grid">

                    {/* Linke Spalte: Order Manifest */}
                    <section className="checkout-section order-manifest">
                        <h2 className="section-title">01_ORDER_MANIFEST</h2>

                        <div className="manifest-content">
                            {cartItems.length === 0 ? (
                                <div className="manifest-empty">
                                    <p>&gt; WARENKORB_LEER</p>
                                    <button
                                        className="execute-btn"
                                        style={{ marginTop: "1rem" }}
                                        onClick={() => navigate("/")}
                                    >
                                        ZURÜCK_ZUM_SHOP
                                    </button>
                                </div>
                            ) : (
                                <>
                                    {cartItems.map((item, index) => (
                                        <div className="manifest-item" key={item.id}>
                                            <span className="item-id">{String(index + 1).padStart(3, "0")}</span>
                                            <span className="item-name">{item.name}</span>

                                            {/* Mengen-Steuerung */}
                                            <div className="item-menge">
                                                <button
                                                    className="menge-btn"
                                                    onClick={() => updateMenge(item.id, item.menge - 1)}
                                                >−</button>
                                                <span className="menge-zahl">{item.menge}</span>
                                                <button
                                                    className="menge-btn"
                                                    onClick={() => updateMenge(item.id, item.menge + 1)}
                                                >+</button>
                                            </div>

                                            <span className="item-price">
                                                CHF {(item.preis * item.menge).toFixed(2)}
                                            </span>

                                            <button
                                                className="item-remove"
                                                onClick={() => removeFromCart(item.id)}
                                                aria-label="Entfernen"
                                            >✕</button>
                                        </div>
                                    ))}

                                    <div className="price-summary">
                                        <div className="summary-line">
                                            <span>SUBTOTAL</span>
                                            <span>CHF {subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="summary-line">
                                            <span>TAX_RATE (8.1%)</span>
                                            <span>CHF {tax.toFixed(2)}</span>
                                        </div>
                                        <div className="summary-line total">
                                            <span>TOTAL_CREDITS</span>
                                            <span>CHF {total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>

                    {/* Rechte Spalte: Authorization */}
                    <section className="checkout-section payment-auth">
                        <h2 className="section-title">02_AUTHORIZATION</h2>
                        <div className="auth-form">
                            <div className="input-group">
                                <label>TARGET_NAME</label>
                                <input type="text" placeholder="FULL NAME" className="terminal-input" />
                            </div>
                            <div className="input-group">
                                <label>CREDIT_LINK_ID</label>
                                <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" className="terminal-input" />
                            </div>
                            <div className="input-row">
                                <div className="input-group">
                                    <label>EXP_DATE</label>
                                    <input type="text" placeholder="MM/YY" className="terminal-input" />
                                </div>
                                <div className="input-group">
                                    <label>SEC_CODE</label>
                                    <input type="password" placeholder="***" className="terminal-input" />
                                </div>
                            </div>

                            <button
                                className="execute-btn"
                                disabled={cartItems.length === 0}
                            >
                                EXECUTE_TRANSACTION
                            </button>
                            <p className="security-note">
                                &gt; encryption: AES-256 active <br />
                                &gt; bypass prevention: enabled
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;