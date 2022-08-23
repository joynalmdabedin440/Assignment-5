document.getElementById('player-calculate-btn').addEventListener('click', function () {
    const perPlayerInput = document.getElementById('player-input-field').value;
    document.getElementById('player-input-field').value='';
    const selectedIndex = document.getElementById('selected-index').innerText;
    const totalPlayerExpense = perPlayerInput * selectedIndex;

    document.getElementById('player-expense').innerText= totalPlayerExpense;
    
   
})

document.getElementById('total-calculate-btn').addEventListener('click', function () {
    totalBudgetCalculate();
})