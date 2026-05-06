import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(produkt) {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === produkt.id);
            if (existing) {
                return prev.map(item =>
                    item.id === produkt.id
                        ? { ...item, menge: item.menge + 1 }
                        : item
                );
            }
            return [...prev, { ...produkt, menge: 1 }];
        });
    }

    function removeFromCart(id) {
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    function updateMenge(id, menge) {
        if (menge <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems(prev =>
            prev.map(item => item.id === id ? { ...item, menge } : item)
        );
    }

    const totalItems = cartItems.reduce((sum, item) => sum + item.menge, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + item.preis * item.menge, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateMenge,
            totalItems,
            subtotal
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart muss innerhalb von CartProvider verwendet werden");
    return ctx;
}