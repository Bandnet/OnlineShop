import { useParams, useNavigate } from 'react-router-dom';
import { getProduktById } from './Produkte.js';
import './ProduktDetail.css';

const BADGE_CONFIG = {
    sale:      { label: "SALE",      klasse: "badge--sale" },
    occasion:  { label: "OCCASION",  klasse: "badge--occasion" },
    gebraucht: { label: "GEBRAUCHT", klasse: "badge--gebraucht" },
};

function ProduktDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const produkt = getProduktById(id);

    if (!produkt) {
        return (
            <div className="detail-not-found">
                <p>Produkt nicht gefunden.</p>
                <button onClick={() => navigate(-1)}>← Zurück</button>
            </div>
        );
    }

    // Achtung: Ich habe hier "originalPreis" (mit zwei i) geschrieben,
    // falls du es in deiner produkte.js so benannt hast.
    const { name, preis, originalPreis, bild, badge, beschreibung, details } = produkt;
    const badgeInfo = badge ? BADGE_CONFIG[badge] : null;

    return (
        <div className="detail-page">
            <button className="detail-back" onClick={() => navigate(-1)}>
                ← Zurück
            </button>

            <div className="detail-layout">
                <div className="detail-bild-wrapper">
                    <img src={bild} alt={name} className="detail-bild" />
                    {badgeInfo && (
                        <span className={`item-card__badge ${badgeInfo.klasse}`}>
                            {badgeInfo.label}
                        </span>
                    )}
                </div>

                <div className="detail-infos">
                    <h1 className="detail-name">{name}</h1>
                    <div className="detail-preis-container">
                        <p className={`detail-preis ${badge === "sale" && originalPreis ? "detail-preis--sale" : ""}`}>
                            CHF {preis.toFixed(2)}
                        </p>
                        {badge === "sale" && originalPreis && (
                            <span className="detail-preis--alt">
                                CHF {originalPreis.toFixed(2)}
                            </span>
                        )}

                    </div>

                    <div className="detail-divider"/>

                    <div className="detail-beschreibung">
                        <h2>Beschreibung</h2>
                        <p>{beschreibung.trim()}</p>
                    </div>

                    {details && Object.keys(details).length > 0 && (
                        <div className="detail-tabelle-wrapper">
                            <h2>Details</h2>
                            <table className="detail-tabelle">
                                <tbody>
                                {Object.entries(details).map(([key, val]) => (
                                    <tr key={key}>
                                        <td className="detail-tabelle__key">{key}</td>
                                        <td className="detail-tabelle__val">{val}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <button className="detail-kaufen">
                        In den Warenkorb
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProduktDetailPage;