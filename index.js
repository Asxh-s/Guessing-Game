let sumbitBtn = document.getElementById("sumbitBtn");
let userGuess = document.getElementById("userGuess");
const randomNo = Math.floor((Math.random() * 10) + 1);
var noGuesses = 1;

sumbitBtn.onclick = function() {
    console.log(userGuess.value)
    switch(true){
        case Number(userGuess.value) == randomNo:
            alert(`Correct the number was ${randomNo}, and you got it in ${noGuesses} guesses!`)
            location.reload(); // reloads the page!
            break;
        case userGuess.value == "" || userGuess.value === undefined:
            alert("Enter a fucking number lmao")
            break;
        case Number(userGuess.value) > 10 || Number(userGuess.value) < 1:
            alert("The number must be between 1 and 10");
            break;
        default:
            alert("Wrong try guess again!");
            noGuesses += 1 
    }
    
}

