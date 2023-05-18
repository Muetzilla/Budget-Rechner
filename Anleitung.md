# Anleitung Budgetrechner

Diese Anleitung soll dir helfen die fehlenden Funktionen des Budgetrechners zu programmieren und so eine Webseite zu erstellen, auf welcher du deine Ausgaben und deine Einnahmen verfolgen kannst.
Wenn du an irgendeinem Schritt der Meinung bist, du kannst die Aufgabe auch ohne Hilfe der Anleitung schaffen dann kannst du es natürlich auch ohne Anleitung versuchen. Natürlich stehen wir dir auch jederzeit bei Fragen zu Verfügung.

### 1. Schritt

Erstelle eine Datei mit dem Namen `budgetrechner.js` und verlinke diese in der `budgetrechner.html` Datei.
In dieser Datei wird sich all dein Code befinden.

### 2. Schritt

Definiere am Anfang der Datei `budgetrechner.js` folgende Variablen:
* `totalEinnahmen` mit dem Wert `0`
* `totalAusgaben` mit dem Wert `0`

Variablen in JavaScript werden wie folgt erstellt:
```javascript
// Eine Variable mit einem Zahlenwert
let variabelName = 0;
```

### 3. Schritt

Da du in der Programmlogik die Einnahmen und Ausgaben einlesen musst, 
musst du auf die HTML-Elemente zugreifen können. 
Dafür musst du die HTML-Elemente in JavaScript Variablen speichern.
Dafür musst du die Funktion `document.getElementById()` verwenden.

Die Funktion `document.getElementById()` gibt dir das HTML-Element mit der angegebenen ID zurück.
```javascript
// HTML-Element mit der ID "id" wird in der Variable htmlElement gespeichert
let htmlElement = document.getElementById("id");
```

Erstelle nun also folgende Variablen und finde das jeweilige HTML-Element in der `budgetrechner.html` Datei
* `einnahmeHinzufuegenElement` das `input`-Element, in dem die Einnahme eingegeben wird
* `einnahmeFormularElement` das `form`-Element, in dem das `input`-Element für die Einnahme und das `button`-Element zum Hinzufügen der Einnahme enthalten sind
* `ausgabeHinzufuegenElement` das `input`-Element, in dem die Ausgabe eingegeben wird
* `ausgabenFormElement` das `form`-Element, in dem das `input`-Element für die Ausgabe und das `button`-Element zum Hinzufügen der Ausgabe enthalten sind
* `einnahmenTotalElement` das `span`-Element, in dem die Summe der Einnahmen angezeigt wird
* `ausgabenTotalElement` das `span`-Element, in dem die Summe der Ausgaben angezeigt wird
* `budgetElement` das `span`-Element, in dem das Guthaben angezeigt wird

### 4. Schritt

Nun musst du noch die Funktionen erstellen, welche die Einnahmen und Ausgaben hinzufügen.
Dafür musst du die Funktionen `einnahmeVerarbeiten()` und `ausgabeVerarbeiten()` erstellen.

In JavaScript werden Funktionen wie folgt erstellt:
```javascript
// Funktion mit dem Namen "funktionName" wird erstellt
function funktionName() {
    // Hier kommt der Code der Funktion rein
}
```

Die Funktion `einnahmeVerarbeiten()` soll folgendes machen:
* Die Einnahme aus dem `input`-Element für die Einnahme auslesen
* Die Funktion `einnahmenBerechnen(parseFloat(einnahme))` aufrufen
* Das Formular zurücksetzen

Die Funktion `ausgabeVerarbeiten()` soll folgendes machen:
* Die Ausgabe aus dem `input`-Element für die Ausgabe auslesen
* Die Funktion `ausgabenBerechnen(parseFloat(ausgabe))` aufrufen
* Das Formular zurücksetzen

Wie du sehen kannst, werden die Oben genannten Funktionen `einnahmenBerechnen()` und `ausgabenBerechnen()` mit einem Parameter aufgerufen.
Das bedeutet, dass du der Funktion einen Wert übergeben musst.
In diesem Fall ist der Wert, welcher übergeben werden muss, die Einnahme oder die Ausgabe.
Ausserdem wird der Wert in der Funktion `parseFloat()` übergeben.
Diese Funktion wandelt den Wert in eine Zahl um.

Um ein Formular zurückzusetzen, kannst du die Funktion `reset()` auf dem Formular aufrufen.
```javascript
// In diesem Beispiel wird das Formular `einnahmeFormularElement` zurückgesetzt
einnahmeFormularElement.reset();
```

### 5. Schritt

Nun musst du noch die Funktionen erstellen, welche die Einnahmen und Ausgaben berechnen.
Dafür musst du die Funktionen `einnahmenBerechnen()` und `ausgabenBerechnen()` erstellen.

Um diese Funktionen umzusetzen, musst du wissen, wie man einer Funktion einen Parameter übergibt, und HTML-Elemente manipuliert.

Um einer Funktion einen Parameter zu übergeben, musst du den Namen des Parameters in den Klammern der Funktion angeben.
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
* Die Einnahme/Ausgabe zur entsprechenden Variable hinzufügen `totalEinnahmen` oder `totalAusgaben`
* In das entsprechende HTML-Element die Summe der Einnahmen/Ausgaben schreiben
* Die Funktion `budgetBerechnen()` aufrufen

### 6. Schritt

Jetzt musst du nur noch die Funktion `budgetBerechnen()` erstellen.
Diese sollte folgendes machen:
* Das aktuelle Guthaben berechnen: `totalEinnahmen - totalAusgaben`
* Das Guthaben in das entsprechende HTML-Element schreiben

### Abschluss

Gratulation, du hast dem Budgetrechner erfolgreich finalisiert und kannst jetzt deine Einnahmen und Ausgaben im Blick behalten. 

Wenn du jetzt am Budgetrechner noch weiterarbeiten möchtest und einige weitere Features hinzufügen möchtest haben wir hier noch einige Anregungen für dich, was du noch machen könntest, wenn du Lust dazu hast.
* Du könntest das Design des Budgetrechners noch nach deinen Wünschen anpassen, sodass es dir besser gefällt
* Aktuell musst du, wenn du einen Fehler gemacht hast den Betrag als negativen Betrag eingeben. Du könntest also ein Feld hinzufügen, mit welchem man Ausgaben & Einnahmen wieder entfernen kannst.
* Das Guthaben, Ausgaben und Einnahmen werden aktuell nicht gespeichert. Wenn du also die Seite neu lädst, sind alle Eingaben verloren. Du könntest also dafür sorgen, dass das Guthaben, die Ausgaben und die Einnahmen auch beim Neuladen der Seite wieder vorhanden sind. Ein guter Anfang wäre der [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) in Javascript.


