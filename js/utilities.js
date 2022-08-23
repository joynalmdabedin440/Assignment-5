
// function getId(idd) {
//     managerExpense = document.getElementById(idd);
//     const managerExpenseString = managerExpense.value;
//     const managerExpenseFloat = parseFloat(managerExpenseString);

//     return managerExpenseFloat;
// }

function totalBudgetCalculate() {
    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const playerExpenseFloat = parseFloat(playerExpenseString);
   

    const managerExpense = document.getElementById('manager-input-field');
    const managerExpenseString = managerExpense.value;
    const managerExpenseFloat = parseFloat(managerExpenseString);
    managerExpense.value = '';
    

    
    // getId('manager-input-field');
    // const gon = managerExpenseFloat;
    const coachExpense = document.getElementById('coach-input-field');
    const coachExpenseString = coachExpense.value;
    const coachExpenseFloat = parseFloat(coachExpenseString);
    coachExpense.value='';

    const total =managerExpenseFloat + coachExpenseFloat + playerExpenseFloat;
    
    document.getElementById('total-coast').innerText=total;

}
