# Anleitung Budgetrechner

Diese Anleitung soll dir helfen die fehlenden Funktionen des Budgetrechners zu programmieren und so eine Webseite zu erstellen, auf welcher du deine Ausgaben und deine Einnahmen verfolgen kannst.
Wenn du an irgendeinem Schritt der Meinung bist, du kannst die Aufgabe auch ohne Hilfe der Anleitung schaffen dann kannst du es natürlich auch ohne Anleitung versuchen. Natürlich stehen wir dir auch jederzeit bei Fragen zu Verfügung.

## 1. Schritt

Definiere am Anfang der Datei `budgetrechner.js` folgende Variablen:

- `totalEinnahmen` mit dem Wert `0`
- `totalAusgaben` mit dem Wert `0`

Variablen in JavaScript werden wie folgt erstellt:

```javascript
// Eine Variable mit einem Zahlenwert
let variabelName = 0;
```

## 2. Schritt

Da du in der Programmlogik die Einnahmen und Ausgaben einlesen musst,
musst du auf die HTML-Elemente zugreifen können.
Dafür musst du die HTML-Elemente in JavaScript Variablen speichern.
Ein HTML-Element kannst du mit der Funktion `document.getElementById()` in einer JavaScript Variabel speichern.

Die Funktion `document.getElementById()` gibt dir das HTML-Element mit der angegebenen ID zurück.

```javascript
// HTML-Element mit der ID "id" wird in der Variable htmlElement gespeichert
let htmlElement = document.getElementById("id");
```

Erstelle nun also folgende Variablen und finde das jeweilige HTML-Element in der `budgetrechner.html` Datei

- `einnahmeHinzufuegenElement` das `input`-Element, in dem die Einnahme eingegeben wird
- `einnahmeFormularElement` das `form`-Element, in dem das `input`-Element für die Einnahme und das `button`-Element zum Hinzufügen der Einnahme enthalten sind
- `einnahmenTotalElement` das `span`-Element, in dem die Summe der Einnahmen angezeigt wird

## 3. Schritt

Nun musst du noch die Funktion erstellen, welche die Einnahmen hinzufügt.
Dafür musst du die Funktionen `einnahmeVerarbeiten()` erstellen.

In JavaScript werden Funktionen wie folgt erstellt:

```javascript
// Funktion mit dem Namen "funktionName" wird erstellt
function funktionName() {
  // Hier kommt der Code der Funktion rein
}
```

Die Funktion `einnahmeVerarbeiten()` soll folgendes machen:

- Die Einnahme aus dem `input`-Element für die Einnahme auslesen
- Die Funktion `einnahmenBerechnen(parseFloat(einnahme))` aufrufen
- Das Formular zurücksetzen

Wie du sehen kannst, wird die Oben genannten Funktion `einnahmenBerechnen()` mit einem Parameter aufgerufen.
Das bedeutet, dass du der Funktion einen Wert übergeben musst.
In diesem Fall ist der Wert, welcher übergeben werden muss, die Einnahme.
Ausserdem wird der Wert in der Funktion `parseFloat()` übergeben.
Diese Funktion wandelt den Wert in eine Zahl um.

Um ein Formular zurückzusetzen, kannst du die Funktion `reset()` auf dem Formular aufrufen.

```javascript
// In diesem Beispiel wird das Formular `einnahmeFormularElement` zurückgesetzt
einnahmeFormularElement.reset();
```

## 4. Schritt

Nun musst du noch die Funktion erstellen, welche die Einnahmen berechnen.
Dafür musst du die Funktion `einnahmenBerechnen()` erstellen.

Um diese Funktion umzusetzen, musst du wissen, wie man einer Funktion einen Parameter übergibt, und HTML-Elemente manipuliert.

Um eine Funktion mit Parameter zu erstellen, musst du den Namen des Parameters in den Klammern der Funktion angeben.

```javascript
// Funktion mit dem Namen "funktionName" wird erstellt
function funktionName(parameterName) {
  // Hier kommt der Code der Funktion rein
}
```

Um ein HTML-Element zu manipulieren, musst du die Funktion `innerHTML` auf dem HTML-Element aufrufen.

```javascript
// In diesem Beispiel wird der Text des HTML-Elements `htmlElement` auf "Hallo Welt" gesetzt
htmlElement.innerHTML = "Hallo Welt";
```

Nun weisst du alles was du für die beiden Funktionen brauchst.
Diese sollten folgendes machen:

- Die Einnahme zur Variabel `totalEinnahmen` hinzufügen.
- In das HTML-Element die Summe der Einnahmen schreiben.

## 5. Schritt

Nun kannst du deinen Code testen, indem du die Datei `index.html` im Internet Browser öffnen.
Du kannst in das Eingabefeld für die Einnahmen eine beliebige Zahl schreiben, und den Knopf drücken um sie hinzuzufügen.
Deine eigegebene Zahl sollte jetzt unten stehen.
Wenn du eine neue Zahl als Einnahmen hinzufügst, sollte die Zahl hinzugefügt werden.

## 6. Schritt

Die Schritte 1-5 kannst du jetzt wiederholen für die Ausgaben.
Erstelle dazu neu die gleichen Variabeln wie für die Einnahmen, jedoch mit anderen Namen und anderen "IDs"
Die neuen Funktionen sollten `ausgabenBerechnen()` und `ausgabeVerarbeiten()`

## 7. Schritt

Zum Schluss kannst du noch dein Guthaben anzeigen lassen.
Erstelle dazu eine Funktion welche in das HTML-Element `guthabenTotalPlatzhalter` die Differenz zwischen `totalEinnahmen` und `totalAusgaben` schreibt.
Diese Funktion muss am Ende von `ausgabenBerechnen()` und `ausgabeVerarbeiten()` aufgerufen werden.

## Abschluss

Gratulation, du hast dem Budgetrechner erfolgreich finalisiert und kannst jetzt deine Einnahmen und Ausgaben im Blick behalten.

Wenn du jetzt am Budgetrechner noch weiterarbeiten möchtest und einige weitere Features hinzufügen möchtest haben wir hier noch einige Anregungen für dich, was du noch machen könntest, wenn du Lust dazu hast.

- Du könntest das Design des Budgetrechners noch nach deinen Wünschen anpassen, sodass es dir besser gefällt
- Aktuell musst du, wenn du einen Fehler gemacht hast den Betrag als negativen Betrag eingeben. Du könntest also ein Feld hinzufügen, mit welchem man Ausgaben & Einnahmen wieder entfernen kannst.
- Das Guthaben, Ausgaben und Einnahmen werden aktuell nicht gespeichert. Wenn du also die Seite neu lädst, sind alle Eingaben verloren. Du könntest also dafür sorgen, dass das Guthaben, die Ausgaben und die Einnahmen auch beim Neuladen der Seite wieder vorhanden sind. Ein guter Anfang wäre der [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) in Javascript.
