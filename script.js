function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/sin\(/g, 'Math.sin(').replace(/cos\(/g, 'Math.cos(').replace(/tan\(/g, 'Math.tan('));
    } catch {
        display.value = 'Error';
    }
}
