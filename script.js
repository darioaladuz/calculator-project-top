function add(...numbers) {
    let result = [...numbers];
    return result.reduce((a, b) => a + b, 0);
}

function subtract(...numbers) {
    let result = [...numbers];
    return result.reduce((a, b) => a - b);
}

function multiply(...numbers) {
    let result = [...numbers];
    return result.reduce((a, b) => a * b);
}

function divide(...numbers) {
    let result = [...numbers];
    return result.reduce((a, b) => a / b);
}

function convert(value) {
    return value * (-1);
}

function percent(value) {
    return value * .01;
}

function clear() {
    const clearButton = document.querySelector('.button-clear');
    clearButton.addEventListener('click', () => {
        const input = document.querySelector('#calc-value');
        input.value = "";
    })
}

function buttonPress() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.addEventListener('click', () => {
        const input = document.querySelector('#calc-value');
        if (button === document.querySelector('.button-dot')) {
            if (input.value.includes('.')) {
                return false;
            } else {
                input.value += button.textContent;
            }
        } else {
        input.value += button.textContent;
        }
    }))
}



buttonPress();
clear();