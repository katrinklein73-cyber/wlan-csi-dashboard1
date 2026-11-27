WETTERSTUDIO ÇOLAKLI – erste PWA-Version

Dateien:
- index.html: Dashboard
- manifest.webmanifest: Installations-Metadaten
- sw.js: Offline-Grundgerüst und Cache
- Zusätzlich: 24-Stunden-Temperatur-/Regen-Diagramm und modellierte Luftqualität (EU-AQI, PM2.5, PM10, Ozon)
- icon.svg: App-Symbol

Standort: Çolaklı / Manavgat (ca. 36.77 N, 31.36 E)
Daten: Open-Meteo Forecast API und Marine API.

WICHTIG ZUR INSTALLATION:
Eine PWA muss über HTTPS oder localhost ausgeliefert werden. ZIP entpacken und
den Ordner auf einen HTTPS-Webhost laden (z.B. GitHub Pages oder eigener Webserver).
Danach die URL in Chrome auf dem Android-Tablet öffnen und „App installieren“
bzw. „Zum Startbildschirm hinzufügen“ wählen.

Die Wetterwerte sind Modellwerte für den Standort, keine lokalen Messgeräte.
Die Alarmzentrale prüft einfache Modell-Schwellenwerte und ersetzt keine
amtlichen Warnungen des türkischen Wetterdienstes MGM.
