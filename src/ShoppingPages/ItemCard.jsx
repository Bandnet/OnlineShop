import { useNavigate } from 'react-router-dom';
import './ItemCard.css';

const BADGE_CONFIG = {
    sale:      { label: "SALE",      klasse: "badge--sale" },
    occasion:  { label: "OCCASION",  klasse: "badge--occasion" },
};

function ItemCard({ produkt }) {
    const navigate = useNavigate();
    const { id, name, preis, originalPreis, bild, badge } = produkt;
    const badgeInfo = badge ? BADGE_CONFIG[badge] : null;

    return (
        <div className="item-card" onClick={() => navigate(`/produkt/${id}`)}>
            <div className="item-card__bild-wrapper">
                <img
                    src={bild}
                    alt={name}
                    className="item-card__bild"
                    loading="lazy"
                />
                {badgeInfo && (
                    <span className={`item-card__badge ${badgeInfo.klasse}`}>
            {badgeInfo.label}
          </span>
                )}
            </div>

            <div className="item-card__infos">
                <h3 className="item-card__name">{name}</h3>

                <div className="item-card__preis-container"> {/* Container für korrektes CSS-Alignment */}
                    <p className={`item-card__preis ${badge === "sale" && originalPreis ? "item-card__preis--sale" : ""}`}>
                        CHF {preis.toFixed(2)}
                    </p>

                    {/* Korrektur: badge (mit d) und && statt Klammern */}
                    {badge === "sale" && originalPreis && (
                        <span className="item-card__preis--alt">
                CHF {originalPreis.toFixed(2)}
            </span>
                    )}
                </div>
            </div>

            <div className="item-card__hover-overlay">
                <span>Details ansehen →</span>
            </div>
        </div>
    );
}

export default ItemCard;