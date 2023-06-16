let totalEinnahmen = 0;
let totalAusgaben = 0;

const einnahmeHinzufuegenElement    = document.getElementById("einnahmeHinzufuegen");
const einnahmeFormularElement       = document.getElementById("einnahmenHinzufuegenFormular");
const ausgabeHinzufuegenElement     = document.getElementById("ausgabenHinzufuegen");
const ausgabenFormularElement           = document.getElementById("ausgabenHinzufuegenFormular");
const einnahmenTotalElement         = document.getElementById("einnahmenTotalPlatzhalter");
const ausgabenTotalElement          = document.getElementById("ausgabenTotalPlatzhalter");
const budgetElement                 = document.getElementById("guthabenTotalPlatzhalter");

function einnahmeVerarbeiten(){
    let einnahme = einnahmeHinzufuegenElement.value;
    einnahmenBerechnen(parseFloat(einnahme));

    einnahmeFormularElement.reset();
}

function einnahmenBerechnen(revenueAmount){
    totalEinnahmen += revenueAmount;

    einnahmenTotalElement.innerHTML = totalEinnahmen;
}

