# Anleitung Budgetrechner

Diese Anleitung soll dir helfen die fehlenden Funktionen des Budgetrechners zu programmieren und so eine Webseite zu erstellen, auf welcher du deine Ausgaben und deine Einnahmen verfolgen kannst.
Wenn du an irgendeinem Schritt der Meinung bist, du kannst die Aufgabe auch ohne Hilfe der Anleitung schaffen dann kannst du es natürlich auch ohne Anleitung versuchen. Natürlich stehen wir dir auch jederzeit bei Fragen zu Verfügung.

## Erklärung bestehender Code

Die ersten beiden Variablen, welche definiert sind enthalten Zahlen. Sie sind jeweils, wie es der Name verrät, für das Total der Einnahmen und Ausgaben zuständig.

Die restlichen Variablen sind Referenzen zu unserer Webseitenstruktur, welche sich in der `budgetrechner.html` Datei befindet.

| Variable Name              | HTML Element                                        |
|----------------------------|-----------------------------------------------------|
| einnahmeHinzufuegenElement | Das Eingabefeld für die Einnahmen                   |
| einnahmeFormularElement    | Das Formular in welchem sich die Einnahmen befinden |
| ausgabeHinzufuegenElement  | Das Eingabefeld für die Ausgaben                    |
| ausgabenFormularElement    | Das Formular in welchem sich die Ausgaben befinden  |
| einnahmenTotalElement      | Der Text, in dem die Einnahmen angezeigt werden     |
| ausgabenTotalElement       | Der Text, in dem die Einnahmen angezeigt werden     |
| budgetElement              | Der Text, in dem das Budget angezeigt wird          |

### Funktionen

In dem vorgegebenen Code befinden sich bereits 2 Funktionen, diese werden benutzt um die Einnahmen zu berechnen.

Die Funktion `einnahmeVerarbeiten` wird aufgerufen, 
sobald man den Knopf um eine Einnahme hinzuzufügen drückt.
Sie liest die Einnahme aus dem Eingabefeld, 
ruft die zweite Methode auf und setzt das Formular zurück.

Die zweite Funktion (`einnahmenBerechnen`) erhält eine Zahl als Parameter, 
fügt diesen zu dem Total der Einnahmen hinzu 
und schreibt das neue Total in das Text-Element

## Implementation der Ausgaben

Deine Aufgabe ist es jetzt die gleichen Funktionen für die Ausgaben zu erstellen.
Der Aufbau ist eigentlich genau derselbe, jedoch unterscheiden sich die benötigten Variablen.

Die Funktionen sollten folgende Namen haben:
- ausgabenBerechnen
- ausgabeVerarbeiten

Sobald du dies gemacht hast, kannst du die `budgetrechner.html` Datei in einem Webbrowser nach Wahl öffnen, und die Funktionen testen.
Falls etwas nicht funktioniert, kannst du gerne uns nach Hilfe fragen.

## Zusatzaufgabe: Budget

Falls du die letzte Aufgabe gemeistert hast, und noch Zeit übrig hast, ist es das Ziel die Funktion zu erstellen, das jedes Mal wenn eine Einnahme oder Ausgabe hinzugefügt wird, das Budget berechnet und angezeigt wird.
Die Funktion kannst du benennen wie du willst, und sollte folgenden Ablauf haben.

1. Variable `budget` mit folgendem Wert erstellen. (`totalEinnahmen - totalAusgaben`)
2. Variable `budget` dem `.innerHTML` von `budgetElement` zuweisen. (Wie in einnahmenBerechnen)

Beachte ausserdem das diese Funktion am Ende von `einnahmenBerechnen` und `ausgabenBerechnen` aufgerufen wird.

## Abschluss

Gratulation, du hast dem Budgetrechner erfolgreich finalisiert und kannst jetzt deine Einnahmen und Ausgaben im Blick behalten.

Wenn du jetzt am Budgetrechner noch weiterarbeiten möchtest und einige weitere Features hinzufügen möchtest haben wir hier noch einige Anregungen für dich, was du noch machen könntest, wenn du Lust dazu hast.

- Du könntest das Design des Budgetrechners noch nach deinen Wünschen anpassen, sodass es dir besser gefällt
- Aktuell musst du, wenn du einen Fehler gemacht hast den Betrag als negativen Betrag eingeben. Du könntest also ein Feld hinzufügen, mit welchem man Ausgaben & Einnahmen wieder entfernen kannst.
- Das Guthaben, Ausgaben und Einnahmen werden aktuell nicht gespeichert. Wenn du also die Seite neu lädst, sind alle Eingaben verloren. Du könntest also dafür sorgen, dass das Guthaben, die Ausgaben und die Einnahmen auch beim Neuladen der Seite wieder vorhanden sind. Ein guter Anfang wäre der [LocalStorage](https://wiki.selfhtml.org/wiki/JavaScript/Web_Storage) in Javascript.
