let wrongLetters = [];
let guess = [];
let inputWord = [];
let dictionaryWord = [];
let imagesArr = [];
let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

let keyboard = document.querySelector(".keyboard");
for (i = 0; i < alphabet.length; i++) {
  let letter = document.createElement("div");
  letter.classList.add("letter");
  letter.innerText = alphabet[i];
  letter.addEventListener("click", guessLetter);
  keyboard.appendChild(letter);
}

function guessLetter(evt) {
  evt.preventDefault();
  guess.push(evt.target.innerText);
}
// Step 1 - Have user choose between playing against (A) dictionary API or (B) inputting their one word
// If (A) - fetch random word from dictionary API and plug it into the inputWord array (after splitting into string)
// If (B) - build function to take in input from prompt and push it into the inputWord array
// Step 2 - Spell out word in the guessing area, but have the text not there (just the dashes)
// Step 3 - When the user inputs a letter and presses "Guess", push that letter into the guess array and compare it to the
//          input word array. Use include() and indexOf() to see if they are anywhere in the array.
// If yes - have the word appear above the dash and remove the letter from the guess array.
// If it appears more than once - have a for loop of indexof() to check for multiple occurances.
// If no - have the letter shift from the guess array and into the wrongLetters array, appearing on the UI
// THEN move forward once through the array of images to add a limb to the hangman
// Step 4 - END GAME
// If word is guessed, have a winner overlay appear, and display the dancing hangman
// If word isn't guessed, have a loser overlay appear, and display the dead hangman
// Step 5 - Reset Button
