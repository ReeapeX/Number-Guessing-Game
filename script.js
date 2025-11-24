let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function guessTheNumber() {
  tries += 1;
  displayTries.innerHTML = "Versuche: " + tries;

  if (numberToGuess == guess.value) {
    headline.innerHTML =
      "Du hast die Zahl Erraten! 🥳🎉 <br>Versuche: " + tries;
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
    numberToGuess = Math.round(Math.random() * 100);
    tries = 0;
    displayTries.innerHTML = "Versuche: " + tries;
  } else if (guess.value > 100) {
    headline.innerHTML = " Die Zahl ist nicht größer als 100!";
  } else if (guess.value < 0) {
    headline.innerHTML = " Die Zahl ist nicht kleiner als 0!";
  } else if (numberToGuess > guess.value) {
    headline.innerHTML = " Die Zahl ist größer!";
  } else if (numberToGuess < guess.value) {
    headline.innerHTML = " Die Zahl ist kleiner!";
  }

  guess.value = "";
}
