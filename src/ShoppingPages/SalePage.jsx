import React from "react"
import { produkte } from "./Produkte.js";
import ItemCard from "./ItemCard.jsx";
import "./Page.css"

function SalePage (){
    const saleProdukts = produkte.filter(p => p.badge === "sale");
    return (
        <div className="produkt-grid">
            {saleProdukts.map(p => <ItemCard key={p.id} produkt={p} />)}
        </div>
    );
}
export default SalePage;