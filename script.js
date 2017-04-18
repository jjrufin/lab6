function convertTemperature(temperature, degree){
if (degree === "C") {
    temperature = ((temperature-32)*1.8);
  console.log (temperature + " C");
}

if (degree === "F"){
  temperature = ((temperature*1.8)+32);
  console.log(temperature + " F");
}
}

convertTemperature(212, "C");
convertTemperature(32, "C");
convertTemperature(65, "C");
convertTemperature(0, "F");

function guessGame() {
    var number = Math.random() * 10 | 1,
        guess,
        text = 'Guess a number:';
    do {
        guess = prompt(text);
        if (number < guess) {
            text = "You've guessed too high!";
        } else if (number > guess) {
            text = "You've guessed too low!";
        }
    } while (guess != number);
    document.write("Good Work");
}
guessGame();
