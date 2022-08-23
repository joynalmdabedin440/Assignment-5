
const selectedPlayer = [];
function showAsSelected(playerName) {
    const selectedPlayerTable = document.getElementById('selected-player-table');
    selectedPlayerTable.innerHTML = '';
    for (let i = 0; i < selectedPlayer.length; i++){
        const name = selectedPlayer[i]
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}`;
        selectedPlayerTable.appendChild(tr);
       
    }
}
 
function addToSelected(selectedName) {
    const playerName = selectedName.parentNode.parentNode.children[0].innerText;
    
    selectedPlayer.push(playerName);

    const selectedIndex = document.getElementById('selected-index');
    const selectedPlayerLength = selectedPlayer.length;
    if (selectedPlayerLength>5) {
       alert('You Can\'t add more Player!!!')
       return selectedPlayerLength;
    }
    
    selectedName.disabled = true;
    
    selectedIndex.innerText = selectedPlayerLength;
    showAsSelected(playerName);

    
}