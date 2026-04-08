import React from "react"
import { produkte } from "./Produkte.js";
import ItemCard from "./ItemCard.jsx";
import "./Page.css"

function HomePage() {
    return (
        <div className="produkt-grid">
            {produkte.map(p => <ItemCard key={p.id} produkt={p} />)}
        </div>
    );
}
export default HomePage;