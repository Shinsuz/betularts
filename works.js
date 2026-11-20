/*
  artsbybn – Werke für den Bereich „Fertige Werke“
  ------------------------------------------------
  Jedes fertige Kunstwerk ist ein Eintrag in dieser Liste. Die Seite baut
  Karten, Filter und Preise automatisch daraus. Ist die Liste leer, zeigt die
  Seite einen Hinweis „Neue Werke folgen“ mit Verweis auf die Anfrage.

  Felder:
    titel      Name des Werks                         (Pflicht)
    kategorie  z. B. "Malerei", "Porträt", "Kalligrafie", "Illustration", "Wandbild"
    technik    z. B. "Acryl auf Leinwand"
    masse      z. B. "50 × 70 cm"
    preis      Zahl in Euro, z. B. 280  (leer lassen = „Preis auf Anfrage“)
    status     "verfuegbar" | "reserviert" | "verkauft"
    bild       Pfad zum Foto, z. B. "images/werke/sonnenfeld.jpg"
    jahr       z. B. 2026

  Beispiel:
    {
      titel: "Sonnenfeld",
      kategorie: "Malerei",
      technik: "Acryl auf Leinwand",
      masse: "50 × 70 cm",
      preis: 280,
      status: "verfuegbar",
      bild: "images/werke/sonnenfeld.jpg",
      jahr: 2026
    },

  Später kann diese Datei durch einen Admin-Bereich ersetzt werden, der die
  gleichen Felder speichert – die Seite selbst muss dafür nicht umgebaut werden.
*/
window.ARTWORKS = [
];
