import React from "react";
import UserStatus from "../Firebase/UserStatus.jsx";
import "./AuthPages.css"; // Stelle sicher, dass der Pfad stimmt

function CheckoutPage() {
    return (
        <div className="auth-page"> {/* Wendet den schwarzen Hintergrund an */}
            <div>
                <div className="auth-header">
                    <h2 className="auth-title">Checkout</h2>
                    <p className="auth-subtitle">System Ready for Transaction</p>
                </div>

                <div className="auth-fields">
                    <p style={{ color: "var(--text-main)" }}>
                        This is the CheckoutPage
                    </p>
                    <UserStatus />
                </div>

                <button className="auth-btn">Kauf bestätigen</button>
            </div>
        </div>
    );
}

export default CheckoutPage;