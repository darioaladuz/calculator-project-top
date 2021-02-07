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

function convert() {
    const convertButton = document.querySelector('.button-convert');
    const input = document.querySelector('#calc-value');
    convertButton.addEventListener('click', () => {
        input.value *= -1;
    });
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

function operate() {
    const add = document.querySelector('.button-add');
    const input = document.querySelector('#calc-value')
    add.addEventListener('click', () => {
        let num1 = input.value;
        input.value = "";
        const result = document.querySelector('.button-result');
        result.addEventListener('click', () => {
            input.value = Number(num1) + Number(input.value);
            num1 = 0;
        })
    })
}


buttonPress();
clear();
convert();
operate();