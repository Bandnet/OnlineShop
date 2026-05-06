import React from "react";
import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

function CheckoutPage() {
    const { cartItems, removeFromCart, updateMenge, subtotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [form, setForm] = React.useState({
        name: "",
        card: "",
        exp: "",
        cvc: ""
    });

    const TAX_RATE = 0.081;
    const tax = Number((subtotal * TAX_RATE).toFixed(2));
    const total = Number((subtotal + tax).toFixed(2));

    // einfache Validierung
    const isFormValid =
        form.name.trim() !== "" &&
        form.card.trim().length >= 16 &&
        form.exp.trim() !== "" &&
        form.cvc.trim().length >= 3;

    function handleCheckout() {
        if (!isFormValid || cartItems.length === 0) return;

        clearCart();
        navigate("/");
    }

    return (
        <div className="checkout-page">
            <div className="checkout-container">

                {/* HEADER */}
                <header className="checkout-header">
                    <h1 className="checkout-title">TERMINAL_CHECKOUT</h1>
                    <span className="status-indicator">
                        SECURE_CONNECTION: ACTIVE
                    </span>
                </header>

                <div className="checkout-grid">

                    {/* LEFT: CART */}
                    <section className="checkout-section">
                        <h2 className="section-title">01_ORDER_MANIFEST</h2>

                        {cartItems.length === 0 ? (
                            <div className="manifest-empty">
                                <p>&gt; WARENKORB_LEER</p>
                                <button
                                    className="execute-btn"
                                    onClick={() => navigate("/")}
                                >
                                    ZURÜCK_ZUM_SHOP
                                </button>
                            </div>
                        ) : (
                            <>
                                {cartItems.map((item, index) => (
                                    <div className="manifest-item" key={item.id}>
                                        <span className="item-id">
                                            {String(index + 1).padStart(3, "0")}
                                        </span>

                                        <span className="item-name">
                                            {item.name}
                                        </span>

                                        <div className="item-menge">
                                            <button
                                                className="menge-btn"
                                                onClick={() =>
                                                    updateMenge(item.id, item.menge - 1)
                                                }
                                            >
                                                −
                                            </button>

                                            <span>{item.menge}</span>

                                            <button
                                                className="menge-btn"
                                                onClick={() =>
                                                    updateMenge(item.id, item.menge + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>

                                        <span className="item-price">
                                            CHF {(item.preis * item.menge).toFixed(2)}
                                        </span>

                                        <button
                                            className="item-remove"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}

                                <div className="price-summary">
                                    <div className="summary-line">
                                        <span>SUBTOTAL</span>
                                        <span>CHF {subtotal.toFixed(2)}</span>
                                    </div>

                                    <div className="summary-line">
                                        <span>TAX</span>
                                        <span>CHF {tax.toFixed(2)}</span>
                                    </div>

                                    <div className="summary-line total">
                                        <span>TOTAL</span>
                                        <span>CHF {total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </section>

                    {/* RIGHT: FORM */}
                    <section className="checkout-section">
                        <h2 className="section-title">02_AUTHORIZATION</h2>

                        <div className="auth-form">

                            <div className="input-group">
                                <label>NAME</label>
                                <input
                                    className="terminal-input"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                />
                            </div>

                            <div className="input-group">
                                <label>CARD NUMBER</label>
                                <input
                                    className="terminal-input"
                                    value={form.card}
                                    onChange={(e) =>
                                        setForm({ ...form, card: e.target.value })
                                    }
                                />
                            </div>

                            <div className="input-row">
                                <div className="input-group">
                                    <label>EXP</label>
                                    <input
                                        className="terminal-input"
                                        value={form.exp}
                                        onChange={(e) =>
                                            setForm({ ...form, exp: e.target.value })
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <label>CVC</label>
                                    <input
                                        type="password"
                                        className="terminal-input"
                                        value={form.cvc}
                                        onChange={(e) =>
                                            setForm({ ...form, cvc: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            <button
                                className="execute-btn"
                                disabled={!isFormValid || cartItems.length === 0}
                                onClick={handleCheckout}
                            >
                                EXECUTE_TRANSACTION
                            </button>

                            {!isFormValid && (
                                <p className="security-note">
                                    &gt; ERROR: ALL FIELDS REQUIRED
                                </p>
                            )}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;