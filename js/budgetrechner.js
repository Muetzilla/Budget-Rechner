function handleRevenue(){
    let revenueInputElement = document.getElementById("revenueInput");
    let revenue = revenueInputElement.value;
    let revenueTotalField = document.getElementById("totalrevenuePlaceholder");
    revenueTotalField.innerHTML = revenue;
    console.log("Die Einnahmen betragen: " + revenue);
}

function handleExpanses(){
    let expensesInputElement = document.getElementById("expensesInput");
    let expenses = expensesInputElement.value;

    let expansesTotalField = document.getElementById("totalexpensePlaceholder");
    expansesTotalField.innerHTML = expenses;
    console.log("Die Ausgaben betragen: " + expenses);
}