var totalBudget = 0;
var totalRevenue = 0;
var totalExpense = 0;

function einnahmeVerarbeiten(){
    let einnahmeHinzufuegenElement = document.getElementById("einnahmeHinzufuegen");
    let einnahme = einnahmeHinzufuegenElement.value;
    einnahmenBerechnen(parseFloat(einnahme));

    let einnahmeFormularElement = document.getElementById("einnahmenHinzufuegenFormular");
    einnahmeFormularElement.reset();
}

function ausgabeVerarbeiten(){
    let ausgabeHinzufuegenElement = document.getElementById("ausgabenHinzufuegen");
    let ausgabe = ausgabeHinzufuegenElement.value;
    ausgabenBerechnen(parseFloat(ausgabe));

    let expensesFormElement = document.getElementById("ausgabenHinzufuegenFormular");
    expensesFormElement.reset();

}

function einnahmenBerechnen(revenueAmount){
    totalRevenue += revenueAmount;

    let revenueTotalField = document.getElementById("einnahmenTotalPlatzhalter");
    revenueTotalField.innerHTML = totalRevenue;
    budgetBerechnen();
}

function ausgabenBerechnen(expensesAmount){
    totalExpense += expensesAmount;

    let expansesTotalField = document.getElementById("ausgabenTotalPlatzhalter");
    expansesTotalField.innerHTML = totalExpense;

    budgetBerechnen();
}

function budgetBerechnen(){
    totalBudget = totalRevenue - totalExpense;

    let budgetField = document.getElementById("guthabenTotalPlatzhalter");
    budgetField.innerHTML = totalBudget;
}