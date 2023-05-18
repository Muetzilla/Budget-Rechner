var totalBudget = 0;
var totalRevenue = 0;
var totalExpense = 0;

function handleRevenue(){
    let revenueInputElement = document.getElementById("revenueInput");
    let revenue = revenueInputElement.value;
    calculateRevenue(parseFloat(revenue));

    let revenueFormElement = document.getElementById("addRevenueForm");
    revenueFormElement.reset();
}

function handleExpenses(){
    let expensesInputElement = document.getElementById("expensesInput");
    let expenses = expensesInputElement.value;
    calculateExpense(parseFloat(expenses));

    let expensesFormElement = document.getElementById("addExpensesForm");
    expensesFormElement.reset();

}

function calculateRevenue(revenueAmount){
    totalRevenue += revenueAmount;

    let revenueTotalField = document.getElementById("totalrevenuePlaceholder");
    revenueTotalField.innerHTML = totalRevenue;
    calculateBudget();
    console.log(totalRevenue);
}

function calculateExpense(expensesAmount){
    totalExpense += expensesAmount;

    let expansesTotalField = document.getElementById("totalexpensePlaceholder");
    expansesTotalField.innerHTML = totalExpense;

    calculateBudget();
}

function calculateBudget(){
    totalBudget = totalRevenue - totalExpense;

    let budgetField = document.getElementById("budgetPlaceholder");
    budgetField.innerHTML = totalBudget;
}