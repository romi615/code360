
function saveExpenses(expenses) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function getExpenses() {
  const data = localStorage.getItem("expenses");
  return data ? JSON.parse(data) : [];
}

function addExpense(title, amount, date){
    const expenses = getExpenses();
    
    const newExpense = {
        id: Date.now(),
        title,
        amount: Number(amount),
        date,
    }

    expenses.push(newExpense);
    saveExpenses(expenses);
}
