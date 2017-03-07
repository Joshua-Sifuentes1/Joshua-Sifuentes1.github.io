"use strict"

	var leftBox = document.getElementById('left-box');
	var middleBox = document.getElementById('middle-box');
	var rightBox = document.getElementById('right-box');
	var number = document.getElementsByClassName('number');
	
// -----------------------------------------
// 	Number buttons nodelist array
// -----------------------------------------

	for(var i = 0; i > number.length; i++) {

		number[i].addEventListener('click', numberInput);

	}

// -----------------------------------------
// 	
// -----------------------------------------

	function numberInput(event) {
		if (middleBox.value === "") {

			leftBox.value += this.innerText;

		} else {

			rightBox.value += this.innerText;

		}
	}

	function numberSign (event) {
		if (middleBox.value === "") {

			leftBox.value *= -1;

		} else {

			rightBox.value *= -1

		}
	}

	function percentage(event) {
		if (middleBox.value === "") {

			leftBox.value /= 100;

		} else {

			rightBox.value /= 100;
		}
	}

	function squareRoot(event) {
		if (middleBox.value === "") {

			leftBox.value = Math.sqrt(leftBox.value);

		} else {
			
			rightBox.value = Math.sqrt(rightBox.value);

		}
	}

// -----------------------------------------
// 	Clearing functions, Clear and All Clear
// -----------------------------------------

	function clear(event) {
		if (middleBox.value === ""){

			leftBox.value = "";

		} else  if((middleBox.value !== "") && (rightBox.value === "")) {

			middleBox.value = "";

		} else {

			rightBox.value = "";
		}
	}

	function allClear(event) {

		leftBox.value = "";
		middleBox.value = "";
		rightBox.value = "";
	}
// ---------------------------------------
// 				Operators
// ---------------------------------------

	function addOperator(event) {

		middleBox.value = " + ";
	}

	function subtractOperator(event) {

		middleBox.value = " - ";
	}

	function multiplyOperator(event) {

		middleBox.value = " * ";
	}

	function divideOperator(event) {

		middleBox.value = " / ";
	}

	function power(event) {

		middleBox.value = " ^ ";

	}

// ---------------------------------------
// 	Switch Statement for math operations
// ---------------------------------------

	function evaluate(event) {
		var total;
		switch(middleBox.value) {
			case " + ":
				total = parseFloat(leftBox.value) + parseFloat(rightBox.value);
				break;
			case " - ":
				total = parseFloat(leftBox.value) - parseFloat(rightBox.value);
				break;
			case " * ":
				total = parseFloat(leftBox.value) * parseFloat(rightBox.value);
				break;
			case " / ":
				total = parseFloat(leftBox.value) / parseFloat(rightBox.value);
				break;
			case " ^ ":
				total = Math.pow(parseFloat(leftBox.value), parseFloat(rightBox.value));
				break; 
		}

		leftBox.value = total;
		middleBox.value = "";
		rightBox.value = "";

		console.log(total);
	}

	
	document.getElementById('number-one').addEventListener('click', numberInput);
	document.getElementById('number-two').addEventListener('click', numberInput);
	document.getElementById('number-three').addEventListener('click', numberInput);
	document.getElementById('number-four').addEventListener('click', numberInput);
	document.getElementById('number-five').addEventListener('click', numberInput);
	document.getElementById('number-six').addEventListener('click', numberInput);
	document.getElementById('number-seven').addEventListener('click', numberInput);
	document.getElementById('number-eight').addEventListener('click', numberInput);
	document.getElementById('number-nine').addEventListener('click', numberInput);
	document.getElementById('number-zero').addEventListener('click', numberInput);
	document.getElementById('decimal').addEventListener('click', numberInput);
	document.getElementById('addition').addEventListener('click', addOperator);
	document.getElementById('sign-change').addEventListener('click', numberSign);
	document.getElementById('percentage').addEventListener('click', percentage);
	document.getElementById('square-root').addEventListener('click', squareRoot);
	document.getElementById('power').addEventListener('click', power);
	document.getElementById('subtract').addEventListener('click', subtractOperator);
	document.getElementById('multiply').addEventListener('click', multiplyOperator);
	document.getElementById('divide').addEventListener('click', divideOperator);
	document.getElementById('equals').addEventListener('click', evaluate);
	document.getElementById('all-clear').addEventListener('click', allClear);
	document.getElementById('clear').addEventListener('click', clear);





