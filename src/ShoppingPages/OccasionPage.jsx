import React from "react"
import { produkte } from "./Produkte.js";
import ItemCard from "./ItemCard.jsx";
import "./Page.css"

function OccasionPage (){
    const occasionProdukts = produkte.filter(p => p.badge === "occasion");
    return (
        <div className="produkt-grid">
            {occasionProdukts.map(p => <ItemCard key={p.id} produkt={p} />)}
        </div>
    );
}
export default OccasionPage;