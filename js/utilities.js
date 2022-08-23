document.getElementById('player-calculate-btn').addEventListener('click', function () {
    const perPlayerInput = document.getElementById('player-input-field').value;
    const totalPlayerExpense = perPlayerInput * selectedPlayer.length;

    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const playerExpenseFloat = parseFloat(playerExpenseString);
    playerExpense.innerText = totalPlayerExpense;
    
   
})

document.getElementById('total-calculate-btn').addEventListener('click', function () {
    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const playerExpenseFloat = parseFloat(playerExpenseString);
    const managerExpense = document.getElementById('manager-input-field');
    const managerExpenseString = managerExpense.value;
    const managerExpenseFloat = parseFloat(managerExpenseString);
    const coachExpense = document.getElementById('coach-input-field');
    const coachExpenseString = coachExpense.value;
    const coachExpenseFloat = parseFloat(coachExpenseString);

    const total = managerExpenseFloat + coachExpenseFloat + playerExpenseFloat;
    
    document.getElementById('total-coast').innerText=total;
})