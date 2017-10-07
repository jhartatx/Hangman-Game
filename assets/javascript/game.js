var wordBank = ["surf", "sun", "ocean", "island", "boat", "waves", "sail", "sand", "water", "beach", "salt"];

var letters = [];

var wins = 0; 

var remaining = 15; 

var random = wordBank [Math.floor(Math.random() * wordBank.length)];

var replace = random.replace(/[a-z]/g, "_");

var replaceClone = replace.split("");

var wordSplit = replace.split();

document.getElementById("current-word").innerHTML = wordSplit;
document.getElementById("wins").innerHTML = wins;
document.getElementById("remaining").innerHTML = remaining; 

document.onkeyup = function(event) {
		var won = false;

		var userGuess = event.key;
		//storing letter that was pushed 
        letters.push(userGuess);
        //updates the letter under "guessed"
        var guessedString = "";

        for(var i=0;i<letters.length;i++){
        	guessedString+=letters[i] + " ";
        };

        document.getElementById("guessed").innerHTML = guessedString;
        //checking the letter against the word and returning its index positioning within the string 
        var theIndex = random.indexOf(userGuess);
        //determine the next move, determine if the letter is within the hidden word
        if(theIndex > -1) {
        	//this will replace the hidden letter with the guessed correct letter
        	
        	replaceClone[theIndex] = userGuess;
   
        	//updates the correct letter guessed to the document and increase wins by one, then pushing wins +1 to document
        	document.getElementById("current-word").innerHTML = replaceClone;
        	
        	// Check to see if the user won by checking for any blank spaces
        	if (replaceClone.indexOf("_") === -1) {
        		wins++;
        		document.getElementById("wins").innerHTML = wins;
        		alert("You've won");
        		resetGame();
        	};  	
        	//if the if statement isnt correct, else statement will deduct from remaining -1, then displays on the document
        } else {
        	remaining--; 

        	document.getElementById("remaining").innerHTML = remaining;

        	if(remaining === 0) {
        		alert("Game Over!");
        		resetGame();
        	};   
        };
};
//resets game after alert of win or game over
function resetGame() {
	letters = [];
	remaining = 15;
	random = wordBank [Math.floor(Math.random() * wordBank.length)];
	replace = random.replace(/[a-z]/g, "_");
	replaceClone = replace.split("");
	wordSplit = replace.split( );

	document.getElementById("guessed").innerHTML = letters;
	document.getElementById("current-word").innerHTML = replace;
	document.getElementById("remaining").innerHTML = remaining;
};
