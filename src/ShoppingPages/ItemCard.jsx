import { useNavigate } from 'react-router-dom';
import './ItemCard.css';

const BADGE_CONFIG = {
    sale:      { label: "SALE",      klasse: "badge--sale" },
    occasion:  { label: "OCCASION",  klasse: "badge--occasion" },
    gebraucht: { label: "GEBRAUCHT", klasse: "badge--gebraucht" },
};

function ItemCard({ produkt }) {
    const navigate = useNavigate();
    const { id, name, preis, bild, badge } = produkt;
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
                <p className="item-card__preis">
                    CHF {preis.toFixed(2)}
                </p>
            </div>

            <div className="item-card__hover-overlay">
                <span>Details ansehen →</span>
            </div>
        </div>
    );
}

export default ItemCard;