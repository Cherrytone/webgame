var collective;
var count = 0;
function startNewGame() {
/*randomly selects a 4 digit array between 0-9
 *Reset guess count
 *clear display
 *reset() came from w3school Form reset() Method
 *var random came from chapter 10 example 10
 */
    var digit1 = Math.floor(Math.random() *10).toString();
	var digit2 = Math.floor(Math.random() *10).toString();
	var digit3 = Math.floor(Math.random() *10).toString();
	var digit4 = Math.floor(Math.random() *10).toString();
    var display = digit1+digit2+digit3+digit4;
    collective = display.split("");
	count = 0;
//document.getElementById("random").innerHTML = collective;
document.getElementById("guess").value = "";
document.getElementById("submitButton").disabled = true;
document.getElementById("answer").innerHTML = "";
document.getElementById("count").innerHTML = "";

}

function validateInput() {
/*make button clickable only when valid
 *4 digit and each digit being 0-9
 */
  var text = document.getElementById("guess").value;
  if (text.search(/\d\d\d\d/) == 0) {
    document.getElementById("submitButton").disabled = false;
  }
  else {
    document.getElementById("submitButton").disabled = true;
  }
	
}
function submitGuess() {
/*onclick button: Submit Guess button
 *get user input from text box
 *counts how many times user presses 'submit answer' until they win
 *call checkAnswer
 *output div
 *Only if BBBB
 *output: Congratulation! it took x guesses.
 *else: output string
 *note - B should always come first regardless of postion
 */
  count++;
  collective;
  var userGuess = document.getElementById("guess").value;
  var output = checkAnswer(collective, userGuess);
  if (output == "BBBB"){
    output = "Congratulation! It took " + count + " guesses.";	
  }
  if (output == "") {
    output = "Try again.";
  }
  //document.getElementById("count").innerHTML = count;
  document.getElementById("answer").innerHTML = output;
  
}

function checkAnswer(random, userGuess){
/*compares user's 4 digit array to the randomly selected array
 *output: match string
 * if postion and digit match
 *   output: B
 * if digit matches but postion does not
 *   output: W
 *if no match	
 *output: No Match
 */
  
  var output = "";
  random = random.slice();
  userGuess = userGuess.slice()
  for (var i = 0;  i < random.length;  ++i) {
       if (random[i] == userGuess[i]) {
	        random[i] = "x";
			userGuess[i] = "a";
            output += "B";
	    }	
	}
	 for(var ii=0; ii < userGuess.length; ii++) {
	   // match digit ii against all other digits
		for(var jj=0; jj < random.length; jj++) {
            if (random[jj] == userGuess[ii]) {
			    random[jj] = "x";
				userGuess[ii] = "a";
			    output += "W";
				break;
			}
		}
	
	}
return output;
}