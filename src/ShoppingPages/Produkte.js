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

    {
        id: "vintage-lederjacke",
        name: "Vintage Lederjacke",
        preis: 149.00,
        bild: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
        badge: "occasion",
        beschreibung: `
      Echte Vintage Lederjacke aus den 80er-Jahren. Weich gegerbtes Rindsleder,
      charaktervolle Patina durch langjährigen Gebrauch. Passt perfekt zu Jeans
      oder einem lässigen Alltagslook. Innenstepped gesäumt, alle Reissverschlüsse
      funktionieren einwandfrei.
    `,
        details: {
            Zustand:  "Gut (leichte Gebrauchsspuren)",
            Grösse:   "L",
            Material: "Echtleder (Rind)",
            Farbe:    "Schwarz",
            Marke:    "Unbekannt / Vintage",
        },
    },

    {
        id: "nike-air-force-1",
        name: "Nike Air Force 1 '07",
        preis: 89.90,
        bild: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
        badge: "sale",
        beschreibung: `
      Klassischer Nike Air Force 1 in Weiss. Zeitloser Sneaker für jeden Tag,
      kombinierbar zu fast allem. Sohle und Obermaterial in sehr gutem Zustand.
      Nur wenige Male getragen.
    `,
        details: {
            Zustand:  "Sehr gut",
            Grösse:   "42 EU / 8.5 US",
            Material: "Leder / Gummi",
            Farbe:    "Weiss",
            Marke:    "Nike",
        },
    },

    {
        id: "wollpullover-grau",
        name: "Merino Wollpullover",
        preis: 59.00,
        bild: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80",
        badge: "gebraucht",
        beschreibung: `
      Hochwertiger Merino-Wollpullover, angenehm weich auf der Haut und nicht
      kratzig. Ideal für die kühleren Jahreszeiten. Maschinenwaschbar bei 30°C
      (Schonwaschgang). Kein Pilling, keine Löcher.
    `,
        details: {
            Zustand:  "Gut",
            Grösse:   "M",
            Material: "100% Merinowolle",
            Farbe:    "Grau meliert",
            Marke:    "Muji",
        },
    },

    {
        id: "retro-sonnenbrille",
        name: "Retro Pilotenbrille",
        preis: 24.90,
        bild: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80",
        badge: null,
        beschreibung: `
      Stylische Pilotenbrille im Retro-Look. UV400-Schutz, goldfarbenes Metall-Gestell,
      verspiegelte Gläser. Leicht und angenehm zu tragen. Kommt mit Hardcase und Putztuch.
    `,
        details: {
            Zustand:  "Neu",
            Gläser:   "Verspiegelt, UV400",
            Gestell:  "Metall (Gold)",
            Lieferung: "Inkl. Hardcase & Putztuch",
        },
    },

];

// ──────────────────────────────────────────────
//  Hilfsfunktion: Produkt per ID finden
// ──────────────────────────────────────────────
export function getProduktById(id) {
    return produkte.find((p) => p.id === id) || null;
}
