// ============================================================
//  PRODUKTE DATENBANK
//  Hier fügst du alle deine Produkte ein.
//  Kopiere einfach einen Block und fülle die Felder aus.
// ============================================================

export const produkte = [

    // ──────────────────────────────────────────────
    //  VORLAGE — kopieren und ausfüllen
    // ──────────────────────────────────────────────
    // {
    //   id: "eindeutige-id",           // Pflicht: URL-freundlich, z.B. "nike-air-max-90"
    //   name: "Produktname",           // Pflicht
    //   preis: 99.90,                  // Pflicht: Zahl (CHF / EUR)
    //   bild: "/bilder/produkt.jpg",   // Pflicht: Pfad oder URL zum Bild
    //   badge: "sale",                 // Optional: "sale" | "occasion" | "gebraucht" | null
    //   beschreibung: `
    //     Langer Beschrieb des Produkts.
    //     Mehrere Zeilen möglich.
    //   `,
    //   details: {                     // Optional: zusätzliche Infos für die Detailseite
    //     Zustand:   "Sehr gut",
    //     Grösse:    "M / 42",
    //     Material:  "100% Baumwolle",
    //     Marke:     "Beispielmarke",
    //   },
    // },
    // ──────────────────────────────────────────────


    // =========================
    // SALE (10)
    // =========================
    {
        id: "fanatec-csl-dd",
        name: "Fanatec CSL DD Base",
        preis: 399.00,
        originalPreis: 529.00,
        bild: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80",
        badge: "sale",
        beschreibung: `Direktantrieb Wheelbase mit hoher Präzision und starkem Force Feedback.`,
        details: {
            Zustand: "Neu",
            Marke: "Fanatec",
            Drehmoment: "5 Nm (upgradebar)",
        },
    },
    {
        id: "thrustmaster-t300rs",
        name: "Thrustmaster T300RS",
        preis: 299.00,
        originalPreis: 400.00,
        bild: "https://images.unsplash.com/photo-1618478594486-c65b899c4936?w=600&q=80",
        badge: "sale",
        beschreibung: `Beliebtes Force Feedback Lenkrad für Einsteiger und Fortgeschrittene.`,
        details: {
            Zustand: "Neu",
            Marke: "Thrustmaster",
        },
    },
    {
        id: "logitech-g923",
        name: "Logitech G923 Wheel",
        preis: 349.00,
        originalPreis: 449.00,
        bild: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
        badge: "sale",
        beschreibung: `TRUEFORCE Feedback-Technologie für realistischeres Fahrgefühl.`,
        details: {
            Zustand: "Neu",
            Marke: "Logitech",
        },
    },
    {
        id: "fanatec-pedale",
        name: "Fanatec CSL Pedale",
        preis: 129.00,
        originalPreis: 179.00,
        bild: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        badge: "sale",
        beschreibung: `Hochwertige Metallpedale mit Upgrade-Möglichkeiten.`,
        details: {
            Zustand: "Neu",
            Marke: "Fanatec",
        },
    },
    {
        id: "sim-seat-basic",
        name: "Sim Racing Sitz Basic",
        preis: 199.00,
        originalPreis: 269.00,
        bild: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
        badge: "sale",
        beschreibung: `Ergonomischer Sitz für lange Rennsessions.`,
        details: {
            Zustand: "Neu",
            Material: "Kunstleder",
        },
    },
    {
        id: "wheel-gt-style",
        name: "GT Style Lenkrad",
        preis: 149.00,
        originalPreis: 199.00,
        bild: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
        badge: "sale",
        beschreibung: `GT-inspiriertes Racing Wheel mit Grip-Bezug.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "monitor-mount",
        name: "Triple Monitor Halterung",
        preis: 179.00,
        bild: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80",
        badge: "sale",
        beschreibung: `Stabile Halterung für 3 Monitore im Simrig.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "handbremse-usb",
        name: "USB Handbremse",
        preis: 89.00,
        bild: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
        badge: "sale",
        beschreibung: `Perfekt für Drift-Setups.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "shifter-hpattern",
        name: "H-Pattern Shifter",
        preis: 119.00,
        originalPreis: 159.00,
        bild: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
        badge: "sale",
        beschreibung: `Manuelle Schaltung für realistisches Fahren.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "sim-rig-frame",
        name: "Sim Rig Frame",
        preis: 299.00,
        originalPreis: 399.00,
        bild: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
        badge: "sale",
        beschreibung: `Stabiles Aluminiumprofil-Rig.`,
        details: {
            Zustand: "Neu",
        },
    },

    // =========================
    // OCCASION (10)
    // =========================
    {
        id: "fanatec-clubsport-v2",
        name: "Fanatec Clubsport V2",
        preis: 450.00,
        bild: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80",
        badge: "occasion",
        beschreibung: `High-End Base mit starkem Feedback.`,
        details: {
            Zustand: "Sehr gut",
        },
    },
    {
        id: "thrustmaster-tmx",
        name: "Thrustmaster TMX",
        preis: 150.00,
        bild: "https://images.unsplash.com/photo-1618478594486-c65b899c4936?w=600&q=80",
        badge: "occasion",
        beschreibung: `Einsteiger Wheel mit solider Leistung.`,
        details: {
            Zustand: "Gut",
        },
    },
    {
        id: "logitech-g29-used",
        name: "Logitech G29",
        preis: 180.00,
        bild: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
        badge: "occasion",
        beschreibung: `Bewährtes Wheel für PlayStation/PC.`,
        details: {
            Zustand: "Gut",
        },
    },
    {
        id: "pedale-loadcell",
        name: "Loadcell Pedale",
        preis: 220.00,
        bild: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        badge: "occasion",
        beschreibung: `Realistisches Bremsgefühl durch Loadcell.`,
        details: {
            Zustand: "Sehr gut",
        },
    },
    {
        id: "sim-seat-used",
        name: "Sim Sitz gebraucht",
        preis: 120.00,
        bild: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
        badge: "occasion",
        beschreibung: `Bequemer Sitz mit leichten Gebrauchsspuren.`,
        details: {
            Zustand: "Gut",
        },
    },
    {
        id: "wheel-f1-style",
        name: "F1 Style Wheel",
        preis: 300.00,
        bild: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=600&q=80",
        badge: "occasion",
        beschreibung: `Formel-Style Lenkrad mit vielen Buttons.`,
        details: {
            Zustand: "Sehr gut",
        },
    },
    {
        id: "rig-alu-used",
        name: "Alu Rig gebraucht",
        preis: 250.00,
        bild: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
        badge: "occasion",
        beschreibung: `Stabiles Rig, bereits aufgebaut.`,
        details: {
            Zustand: "Gut",
        },
    },
    {
        id: "monitor-stand-used",
        name: "Monitor Stand gebraucht",
        preis: 90.00,
        bild: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80",
        badge: "occasion",
        beschreibung: `Single Monitor Halterung.`,
        details: {
            Zustand: "Gut",
        },
    },
    {
        id: "handbremse-used",
        name: "Handbremse gebraucht",
        preis: 50.00,
        bild: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
        badge: "occasion",
        beschreibung: `Funktioniert einwandfrei.`,
        details: {
            Zustand: "Gut",
        },
    },
    {
        id: "shifter-used",
        name: "Shifter gebraucht",
        preis: 70.00,
        bild: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
        badge: "occasion",
        beschreibung: `Solider H-Shifter.`,
        details: {
            Zustand: "Gut",
        },
    },

    // =========================
    // OHNE BADGE (10)
    // =========================
    {
        id: "sim-gloves",
        name: "Sim Racing Handschuhe",
        preis: 29.90,
        bild: "https://images.unsplash.com/photo-1603122630570-a0c3fa3c4d3c?w=600&q=80",
        badge: null,
        beschreibung: `Verbesserter Grip am Lenkrad.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "wheel-stand",
        name: "Wheel Stand",
        preis: 99.00,
        bild: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
        badge: null,
        beschreibung: `Klappbarer Wheel Stand.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "button-box",
        name: "Button Box",
        preis: 79.00,
        bild: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
        badge: null,
        beschreibung: `Zusätzliche Controls fürs Rig.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "sim-dashboard",
        name: "Sim Dashboard Display",
        preis: 89.00,
        bild: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        badge: null,
        beschreibung: `Zeigt Telemetriedaten live an.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "vr-headset",
        name: "VR Headset",
        preis: 399.00,
        bild: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&q=80",
        badge: null,
        beschreibung: `Immersives Racing Erlebnis.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "seat-slider",
        name: "Seat Slider",
        preis: 49.00,
        bild: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
        badge: null,
        beschreibung: `Verstellbare Sitzschiene.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "pedal-plate",
        name: "Pedal Plate",
        preis: 59.00,
        bild: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        badge: null,
        beschreibung: `Stabile Pedalhalterung.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "wheel-adapter",
        name: "Wheel Adapter",
        preis: 39.00,
        bild: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
        badge: null,
        beschreibung: `Adapter für verschiedene Wheels.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "bass-shaker",
        name: "Bass Shaker",
        preis: 120.00,
        bild: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
        badge: null,
        beschreibung: `Vibrationen für realistisches Feedback.`,
        details: {
            Zustand: "Neu",
        },
    },
    {
        id: "cable-kit",
        name: "Cable Management Kit",
        preis: 19.90,
        bild: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
        badge: null,
        beschreibung: `Sauberes Kabelmanagement fürs Rig.`,
        details: {
            Zustand: "Neu",
        },
    },

];

// ──────────────────────────────────────────────
//  Hilfsfunktion: Produkt per ID finden
// ──────────────────────────────────────────────
export function getProduktById(id) {
    return produkte.find((p) => p.id === id) || null;
}