import './footer.css';

const oeffnungszeiten = [
    { tag: "Montag",      von: "09:00", bis: "18:30", offen: true },
    { tag: "Dienstag",    von: "09:00", bis: "18:30", offen: true },
    { tag: "Mittwoch",    von: "09:00", bis: "18:30", offen: true },
    { tag: "Donnerstag",  von: "09:00", bis: "20:00", offen: true },
    { tag: "Freitag",     von: "09:00", bis: "20:00", offen: true },
    { tag: "Samstag",     von: "10:00", bis: "17:00", offen: true },
    { tag: "Sonntag",     von: null,    bis: null,     offen: false },
];

const wochentage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const heuteIndex = new Date().getDay();
const heute = wochentage[heuteIndex];

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="infos">
                    <h2>OnlineShop</h2>
                    <h3>Standort</h3>
                    <p>Musterstraße 42</p>
                    <p>12345 Musterstadt</p>
                    <h3>Kontakt</h3>
                    <p>info@onlineshop.de</p>
                    <p>+49 123 456 789</p>
                </div>

                <div className="oeffnungszeiten">
                    <h2>Öffnungszeiten</h2>
                    <table className="oeffnungszeiten-tabelle">
                        <thead>
                        <tr>
                            <th>Tag</th>
                            <th>Zeit</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {oeffnungszeiten.map(({ tag, von, bis, offen }) => {
                            const istHeute = tag === heute;
                            return (
                                <tr
                                    key={tag}
                                    className={`${!offen ? "geschlossen" : ""} ${istHeute ? "heute" : ""}`}
                                >
                                    <td>{tag}{istHeute ? " ◀" : ""}</td>
                                    <td>{offen ? `${von} – ${bis} Uhr` : "—"}</td>
                                    <td>
                      <span className={`badge ${offen ? "offen" : "geschlossen"}`}>
                        {offen ? "Offen" : "Geschlossen"}
                      </span>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} <span>OnlineShop</span> — Alle Rechte vorbehalten
            </div>
        </>
    );
}

export default Footer;
