let submitBtn = document.getElementById("submitBtn");
let userGuess = document.getElementById("userInputGuess");
const randomNo = Math.floor((Math.random() * 10) + 1);
var noGuesses = 1;

submitBtn.onclick = function() {
    switch(true){
        case Number(userGuess.value) == randomNo:
            alert(`Correct! The number was ${randomNo}, and you got it in ${noGuesses} guess(es)!`);
            location.reload(); // reloads the page!
            break;
        case userGuess.value == "" || userGuess.value === undefined:
            alert("Please enter a number!")
            break;
        case Number(userGuess.value) > 10 || Number(userGuess.value) < 1:
            alert("The number must be between 1 and 10");
            break;
        default:
            alert("Wrong try guess again!");
            noGuesses += 1 
    }
    
}

