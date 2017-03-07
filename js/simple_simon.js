$(document).ready(function(){
	"use strict"

// -----------------------------------------------------------------
//							Variables
// -----------------------------------------------------------------

	var colors = $(".square");
	var simonSequence = [];
	var counter =  0;
	var roundNumber = 1;
	var highScore = 0;


// -----------------------------------------------------------------
//		
// -----------------------------------------------------------------

	$(".square").click(function(){
		squarePressed($(this));

		if($(this).data('color') == $(simonSequence[counter]).data('color')){

			if(counter == (simonSequence.length - 1)){

				counter = 0;
				roundNumber++;
				$(".round-number").html("Round: " + roundNumber);
				simonMove();
				
			} else {
				counter++;
			}

			//-----------------------------------
			//		  High Score counter
			//-----------------------------------

			if(highScore < roundNumber) {
				highScore = roundNumber - 1;
				$("#high-score").html("High Score: " + highScore);
			} 

			//-----------------------------------
			//	Adding box animation at round 5
			//-----------------------------------

			if(roundNumber >= 5){
				addMovement();
			}

		} else {

			gameOver();
		}

	});

// -----------------------------------------------------------------
//							Simon Sequence
// -----------------------------------------------------------------

	//Random color generator for Simon
	function randomColor(){

		//Random number generator 0-3
		var randomNumber = Math.floor((Math.random() * 4));
		var color = colors[randomNumber];
		simonSequence.push(color);
	};

	
	function simonMove(){
		randomColor();
		animate(simonSequence);
	};

	function animate(sequence) {
		var i = 0;
		var interval = setInterval(function() {
		squarePressed(sequence[i]);
			
			i++;

			if (i >= sequence.length) {
				clearInterval(interval);
			}

		}, 600);
	}

// -----------------------------------------------------------------
//	Functions that will animate the square that is clicked/pressed.
// -----------------------------------------------------------------

	function squarePressed(element){
		
		$(element).addClass("opacity");
		setTimeout(function(){
			$(element).removeClass("opacity");
		}, 200);
	};

// -----------------------------------------------------------------
//					Start game button function
// -----------------------------------------------------------------

	function startGame(){
		$("#start-button").click(function(){
			simonSequence = [];
			roundNumber = 1;
			simonMove();
			removeClass();
			$(".round-number").fadeIn(function() {
				$(this).html("Round: 1");
			});
		});
	};

// -----------------------------------------------------------------
//					   Game Over function
// -----------------------------------------------------------------

	function gameOver(){

		simonSequence = [];
		counter = 0;
		roundNumber = 1;
		$(".round-number").html("Game Over! Press 'Start Game' to play again.");
		$(".red-square").addClass("red-square-glow");
		$(".blue-square").addClass("blue-square-glow");
		$(".yellow-square").addClass("yellow-square-glow");
		$(".green-square").addClass("green-square-glow");

	};

// -----------------------------------------------------------------
//					  Remove Class function
// -----------------------------------------------------------------
	function removeClass(){
		$(".square").removeClass("add-animation");
		$(".square").removeClass("add-animation2");
		$(".square").removeClass("red-square-glow");
		$(".square").removeClass("blue-square-glow");
		$(".square").removeClass("yellow-square-glow");
		$(".square").removeClass("green-square-glow");
	}

// -----------------------------------------------------------------
//					Add square movement function
// -----------------------------------------------------------------

	function addMovement(){
		$(".red-square").addClass("add-animation");
		$(".blue-square").addClass("add-animation");
		$(".yellow-square").addClass("add-animation2");
		$(".green-square").addClass("add-animation2");
	}
// -----------------------------------------------------------------
//				  Functions that need to be called
// -----------------------------------------------------------------

	squarePressed();
	startGame();


});