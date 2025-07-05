// var result = document.querySelector('input')
// var operand1 = null;
// var operator = null;
// var operand2 = null;

// function buttonPressed(button) {
//     result.value += button.innerText.toString();
// }

// function clearInput() {
//     result.value = null;
// }   


// function calculate(button) {
//     operand1 = result.value;
//     // result.value = null
//     operator = button.innerText;
// }
// function resultButton() {
//     operand2= result.value;
//     result.value = eval(  operand1+ operator + operand2 );
// }
 

var result = document.querySelector('#result');
var operand1 = null;
var operator = null;
var operand2 = null;

function buttonPressed(button) {
    var digit = button.innerText.toString();

    if (result.value.length == 1 & result.value[0]  =='0') {
        if (digit == '.') {
            result.value += digit;
        } else if (digit !='0') {
            result.value = digit
        }
    } else {
        result.value += digit;
    }
}

function clearInput() {
    result.value = '';
    operand1 = null;
    operator = null;
    operand2 = null;
}

function calculate(button) {
    if (operand1 === null && result.value !== '') {
        operand1 = result.value;
        result.value = '';
        operator = button.innerText;
    }
}

function resultButton() {
    operand2 = result.value;
       

    if (operand1 !== null && operand2 !== null && operator !== null) {
        let resultValue = null;
        
        switch (operator) {
            case '+':
                resultValue = parseFloat(operand1) + parseFloat(operand2);
                break;
            case '-':
                resultValue = parseFloat(operand1) - parseFloat(operand2);
                break;
            case 'x':
                resultValue = parseFloat(operand1) * parseFloat(operand2);
                break;
            case '÷':
                if (operand2 !== '0') {
                    resultValue = parseFloat(operand1) / parseFloat(operand2);
                } else {
                    resultValue = 'Error';
                }
                break;
            case '%':
                resultValue = parseFloat(operand1) % parseFloat(operand2);
                break;
            case '/-':
                resultValue = -parseFloat(operand1);
                break;
            default:
                resultValue = 'Error';
        }
        
        result.value = resultValue;
        operand1 = resultValue;
        operator = null;
        operand2 = null;
    }
}
function dot() {
    if (result.value.includes('.') == false) {
        result.value += '.'

    }
}
function plusMinus() {
    result.value = (parseFloat(result.value) *-1).toString();
}