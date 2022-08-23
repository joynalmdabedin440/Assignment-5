
function returnInput(inputFieldId) {
    const inputFiledValue = document.getElementById(inputFieldId);
    const inputValue = parseFloat(inputFiledValue.value);
    inputFiledValue.value = '';
    return inputValue;
}

function innerTextReturn(textId) {
    const selectedIndex = document.getElementById(textId).innerText
    return selectedIndex;
}


