const inputDescription = document.getElementById("description");
const inputAmount = document.getElementById("amount");
const inputType = document.getElementById("type");
const totalBudget = document.getElementById("total-budget");
const budgetForm = document.getElementById('budget-form');

let totalAmt = 0;

budgetForm.addEventListener('click', (e)=>{
    e.preventDefault();
})

function AddBtn() {
    if (inputAmount.value === "") {
    alert("Please! enter enough amount");
    return;
  }
    let inputAmt = Number(inputAmount.value);
    let selectType = inputType.value;
    let selectDes = inputDescription.value;
    
    if(selectType === 'income'){
        totalAmt = totalAmt + inputAmt;
    } else if (selectType === "expense" && totalAmt > 0){
        totalAmt = totalAmt - inputAmt;
    }

    inputAmount.value = "";
    inputDescription.value = "";

    totalBudget.innerText = `Total Budget: $${Math.trunc(totalAmt)}`
}



