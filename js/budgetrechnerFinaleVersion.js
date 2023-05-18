let totalEinnahmen = 0;
let totalAusgaben = 0;

const einnahmeHinzufuegenElement    = document.getElementById("einnahmeHinzufuegen");
const einnahmeFormularElement       = document.getElementById("einnahmenHinzufuegenFormular");
const ausgabeHinzufuegenElement     = document.getElementById("ausgabenHinzufuegen");
const ausgabenFormElement           = document.getElementById("ausgabenHinzufuegenFormular");
const einnahmenTotalElement         = document.getElementById("einnahmenTotalPlatzhalter");
const ausgabenTotalElement          = document.getElementById("ausgabenTotalPlatzhalter");
const budgetElement                 = document.getElementById("guthabenTotalPlatzhalter");

function einnahmeVerarbeiten(){
    let einnahme = einnahmeHinzufuegenElement.value;
    einnahmenBerechnen(parseFloat(einnahme));

    einnahmeFormularElement.reset();
}

function ausgabeVerarbeiten(){
    let ausgabe = ausgabeHinzufuegenElement.value;
    ausgabenBerechnen(parseFloat(ausgabe));

    ausgabenFormElement.reset();

}

function einnahmenBerechnen(revenueAmount){
    totalEinnahmen += revenueAmount;

    einnahmenTotalElement.innerHTML = totalEinnahmen;
    budgetBerechnen();
}

function ausgabenBerechnen(expensesAmount){
    totalAusgaben += expensesAmount;
    ausgabenTotalElement.innerHTML = totalAusgaben;

    budgetBerechnen();
}

function budgetBerechnen(){
    budgetElement.innerHTML = String(totalEinnahmen - totalAusgaben);
}