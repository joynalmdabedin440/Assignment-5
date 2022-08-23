
document.getElementById('player-calculate-btn').addEventListener('click', function () {

    const perPlayerInput = returnInput('player-input-field');
    
    const selectedIndex =innerTextReturn('selected-index');
    const totalPlayerExpense = perPlayerInput * selectedIndex;

    document.getElementById('player-expense').innerText= totalPlayerExpense;
    
})

document.getElementById('total-calculate-btn').addEventListener('click', function () {
    const playerExpenseFloat = parseFloat(innerTextReturn('player-expense'));
   
    const managerExpense = returnInput('manager-input-field');
    const coachExpense = returnInput('coach-input-field');

    const total =managerExpense + coachExpense + playerExpenseFloat;
    document.getElementById('total-coast').innerText=total;
})