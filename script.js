let displayScreen = document.querySelector('#display-container');
let displayValue = document.querySelector('#display-container').textContent;
const numButtons = document.querySelectorAll('.num-button');
const clearButtons = document.querySelectorAll('.clear-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalButton = document.querySelector('.equal-button');
const decButton = document.querySelector('.dec-button');
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
	numButtons.forEach(button => {
		button.addEventListener('click', () => {
			displayValue += button.textContent;
			displayScreen.textContent = displayValue;
		
			if(operator == "") {
				num1 += button.textContent;

			}
			else {
				num2 += button.textContent;
				if(operator == '/' && num2 == 0) {
					displayValue='';
					displayScreen.textContent = "ERROR";
					num1 = '';
					num2 = '';
					result = '';
					operator = '';
					alert("Oops! You cannot divide by zero. Cleared all numbers. Try again!");
				}
				else {
					result = operate(operator, num1, num2);
				}
			
			}
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
				if(num1 == displayValue) {
					num1 = backDisplayValue;
				}
				else if(num2 == displayValue) {
					num2 = backDisplayValue;
				}
				displayValue = backDisplayValue;
				displayScreen.textContent = displayValue;
				if(num1 != "" && num2 != ""){
					result = operate(operator, num1, num2);				}
			}
		})
	})
}

function addDecButton() {
	decButton.addEventListener('click', () => {
		let strNum1 = num1.toString();
		let strNum2 = num2.toString();
		let decExists = false;
		for(let i = 0; i<strNum1.length; i++) {
			if(strNum1[i] == '.') {
				decExists = true;
			}
		}
		for(let i = 0; i<strNum2.length; i++) {
			if(strNum2[i] == '.') {
				decExists = true;
			}
		}
		if(!decExists) {
			if(operator == "") {
				num1 += decButton.textContent;
			}
			else {
				num2 += decButton.textContent;
			}
			displayValue += decButton.textContent;
			displayScreen.textContent = displayValue;
		}
		else {
			alert("You already have a '.' in your expression.");
		}
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
		if(result != "") {
			displayScreen.textContent = result;
			displayValue = result;
			num1 = result;
		}
		else {
			num1='';
			displayValue='';
			displayScreen.textContent = "ERROR";
			alert("Oops! Don't forget to enter all the numbers/operators \nthat you need before pressing =. Try again!");

		}
		
		num2 = '';
		operator = "";
	})
}


addNumButton();
addClearButton();
addOperatorButton();
addEqualButton();
addDecButton();




