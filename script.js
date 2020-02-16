let displayScreen = document.querySelector('#display-container');
let displayValue = document.querySelector('#display-container').textContent;
const numButtons = document.querySelectorAll('.num-button');
const clearButtons = document.querySelectorAll('.clear-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalButton = document.querySelector('.equal-button');
let num1 = '';
let num2 = '';
let operator = "";
let result ="";

function add (a, b) {
	return Number(a)+Number(b);
}

function subtract (a, b) {
	return a-b;
}

function multiply (a, b) {
	return a*b;
}

function divide(a, b) {
	return a/b;
}

function operate(operator, num1, num2){
	let result;
	switch(operator) {
		case '/':
			result = divide(num1, num2);
			break;
		case 'x':
			result = multiply(num1, num2);
			break;
		case '-':
			result = subtract(num1, num2);
			break;
		case '+':
			result = add(num1, num2);
			break;

	}
	operator = "";
	return result;
}

function addNumButton() {
	//displayValue = "";
	numButtons.forEach(button => {
		button.addEventListener('click', () => {
			displayValue += button.textContent;
			displayScreen.textContent = displayValue;
		
			if(operator == "") {
				num1 += button.textContent;

			}
			else {
				num2 += button.textContent;
				result = operate(operator, num1, num2);
			}
			//operator = "";
		})
	})
}

function addClearButton() {
	clearButtons.forEach(button => {
		button.addEventListener('click', () => {
			if(button.textContent == "AC") {
				displayValue = "";
				num1 = num2 = "";
				operator = "";
				result = "";
				displayScreen.textContent = displayValue;
			}
			if(button.textContent == "Back") {
				let backDisplayValue = "";
				for(let i = 0; i<(displayValue.length-1); i++) {
					backDisplayValue += displayValue[i];
				}
				displayValue = backDisplayValue;
				displayScreen.textContent = displayValue;
			}
		})
	})
}

function addOperatorButton() {
	operatorButtons.forEach(button => {
		button.addEventListener('click', () => {
			operator = "";
			if(button.textContent == "/") {
				operator += "/";
			}
			if(button.textContent == "x") {
				operator += "x";
			}
			if(button.textContent == "-") {
				operator += "-";
			}
			if(button.textContent == "+") {
				operator += "+";	
			}
			if(result) {
				displayValue = result;
				num1 = result;
				num2 = "";
			}
			else {
				displayValue = "";
			}
			displayScreen.textContent = displayValue;
			displayValue="";
		})
	})
}

function addEqualButton() {
	equalButton.addEventListener('click', () => {
		// num2 = displayValue;
		// result = operate(operator, num1, num2);
		displayScreen.textContent = result;
		displayValue = result;
		num1 = result;
		num2 = '0';
		operator = "";
	})
}


addNumButton();
addClearButton();
addOperatorButton();
addEqualButton();




