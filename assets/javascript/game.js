


var wordBank = ["surf", "sun", "ocean", "island", "boat"];

var letters = [];

var wins = 0; 

var remaining = 15; 

var random = wordBank [Math.floor(Math.random() * wordBank.length)];

// var wordSplit = random.split("");

var replace = random.replace(/[a-z]/g, "_ ");

var wordSplit = replace.split( );

var replace1 = [];

for (var i = 0; i < random.length; i++) {
	replace1.push(" ");
}

// console.log(random);
// console.log(replace);
// console.log(typeof replace);

document.onkeyup = function(event) {


		var userGuess = event.key;
        letters.push(userGuess);
        document.getElementById("guessed").innerHTML = letters;

        var theIndex = random.indexOf(userGuess);
        if(theIndex > -1) {
        	replace1[theIndex] = userGuess;
        	
        	document.getElementById("current-word").innerHTML = replace1;
        	wins++;
        	document.getElementById("wins").innerHTML = wins;

        } else{
        	
        }





       }







document.getElementById("current-word").innerHTML = wordSplit;
document.getElementById("wins").innerHTML = wins;
document.getElementById("remaining").innerHTML = remaining; 








