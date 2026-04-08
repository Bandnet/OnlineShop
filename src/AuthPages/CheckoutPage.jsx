import React from "react";
import UserStatus from "../Firebase/UserStatus.jsx";
import "./CheckoutPage.css";

function CheckoutPage() {
    return (
        <div className="checkout-page">
            <div className="checkout-container">

                {/* Header Sektion */}
                <header className="checkout-header">
                    <h1 className="checkout-title">TERMINAL_CHECKOUT</h1>
                    <div className="system-status">
                        <UserStatus />
                        <span className="status-indicator">SECURE_CONNECTION: ACTIVE</span>
                    </div>
                </header>

                <div className="checkout-grid">

                    {/* Linke Spalte: Order Manifest */}
                    <section className="checkout-section order-manifest">
                        <h2 className="section-title">01_ORDER_MANIFEST</h2>
                        <div className="manifest-content">
                            {/* Beispiel-Item (später über Props/Cart-State) */}
                            <div className="manifest-item">
                                <span className="item-id">#A88-01</span>
                                <span className="item-name">Cyber Hoodie</span>
                                <span className="item-price">CHF 45.00</span>
                            </div>

                            <div className="price-summary">
                                <div className="summary-line">
                                    <span>SUBTOTAL</span>
                                    <span>CHF 45.00</span>
                                </div>
                                <div className="summary-line">
                                    <span>TAX_RATE (8.1%)</span>
                                    <span>CHF 3.65</span>
                                </div>
                                <div className="summary-line total">
                                    <span>TOTAL_CREDITS</span>
                                    <span>CHF 48.65</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Rechte Spalte: Payment / Authorization */}
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

                            <button className="execute-btn">
                                EXECUTE_TRANSACTION
                            </button>
                            <p className="security-note">
                                > encryption: AES-256 active <br/>
                                > bypass prevention: enabled
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;