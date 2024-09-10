let currentInput = '';
let previousInput = '';
let operator = '';
let result = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput)
}

function updateDisplay(value){
    document.getElementById('calculator-display').value = value;
}

function chooseOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = ''
}

function calculate() {
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
        
    }

    updateDisplay(result);
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}

function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = '';
    result = null;
    updateDisplay('')
}

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (!isNaN(value)) {
            appendNumber(value);
        } else if (value === 'C') {
            clearCalculator();
        } else if (value === '=') {
            calculate();
        }else {
            chooseOperator(value)
        }
    })
})
