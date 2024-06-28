// for multiplication (×,*) and division (÷, /)
function calculate(value) {
    value = value.replace(/×/g, '*').replace(/÷/g, '/');;
    try {
        return eval(value);
    } catch (e) {
        return 'Error';
    }
}

//for backspace
function backspace() {
    let currentValue = document.calc.txt.value;
    document.calc.txt.value = currentValue.slice(0, -1);
}

//toggling bw '(' and ')'
function toggleParenthesis() {
    var inputField = document.getElementsByName("txt")[0];
    var currentValue = inputField.value;

    if (currentValue === "") {
        inputField.value = "(";
    } else if (!isNaN(parseInt(currentValue.slice(-1)))) {
        inputField.value = currentValue + ")";
    } else {
        inputField.value = currentValue + "(";
    }
}

//additional keys
function toggleHiddenKeys() {
    const hiddenKeys = document.querySelectorAll('.key-hidden');
    hiddenKeys.forEach(key => {
        key.classList.toggle('visible');
    });

    const container = document.querySelector('.container');
    const visibleKeys = document.querySelectorAll('.visible').length;

    if (visibleKeys > 0) {
        container.style.height = 'auto'; // Adjust height to fit all keys
    } else {
        container.style.height = ''; // Reset to original height
    }
}

function Numbers(functionName) {
    document.calc.txt.value += functionName + '(';
}

function extendedCalculate(value) {
    try {
        // Replace the mathematical operators with their JavaScript equivalents
        value = value.replace(/×/g, '*').replace(/÷/g, '/');

        // Replace the function names with their JavaScript Math equivalents
        value = value.replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/log/g, 'Math.log10')
            .replace(/pow/g, 'Math.pow')
            .replace(/√/g, 'Math.sqrt')
            .replace(/π/g, '3.14')
            .replace(/mod/g, '%')
            .replace(/\^/g, '**');

        // Calculate the result using eval
        return eval(value);
    } catch (e) {
        return 'Error';
    }
}

// Modify the "=" button's onclick to use the extended calculate function
document.querySelector('.num[onclick*="calculate(calc.txt.value)"]')
    .setAttribute('onclick', 'document.calc.txt.value = extendedCalculate(document.calc.txt.value)');

function insertPi() {
    document.calc.txt.value += 'π';
}

function sinFunction() {
    let currentValue = document.calc.txt.value;
    document.calc.txt.value = currentValue + 'sin(';
}

function cosFunction() {
    let currentValue = document.calc.txt.value;
    document.calc.txt.value = currentValue + 'cos(';
}

function tanFunction() {
    let currentValue = document.calc.txt.value;
    document.calc.txt.value = currentValue + 'tan(';
}

function logFunction() {
    let currentValue = document.calc.txt.value;
    document.calc.txt.value = currentValue + 'log(';
}

function sqrtFunction() {
    let currentValue = document.calc.txt.value;
    document.calc.txt.value = currentValue + '√(';
}

function modFunction() {
    let currentValue = document.calc.txt.value;
    document.calc.txt.value = currentValue + ' mod ';
}

function powFunction() {
    let currentValue = document.calc.txt.value;
    document.calc.txt.value = currentValue + '^';
}