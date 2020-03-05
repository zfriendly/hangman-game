let modalBox;
window.onload = function() {
  modalBox = document.querySelector(".modal_box");
  modalBox.addEventListener("click", closeModal);
};
// let score;
let ownWordButton = document.querySelector(".game_buttons__enter");
let wordForm = document.querySelector(".word_form");
let submitWord = document.querySelector(".submit_word");
let userInput = document.querySelector(".input_word");
let wordBox = document.querySelector(".word__box");
let keyboard = document.querySelector(".keyboard");
let guessCounter = document.querySelector(".wrong_counter");
let musicButton = document.querySelector(".game_buttons__music");
let musicPlayer = document.querySelector(".music");
let gunshot = document.querySelector(".gunshot");

let wrongLetters = [];
let guess = [];
let inputWord = [];
let imagesArr = [
  "images/hm_0.png",
  "images/hm_1.png",
  "images/hm_2.png",
  "images/hm_3.png",
  "images/hm_4.png",
  "images/hm_5.png",
  "images/hm_6.png",
  "images/hm_7.png",
  "images/hm_dead.gif"
];
let correctLetters = [];
const alphabet = [
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
let letter;
let counter = 0;
let correctCounter = 0;
let guessesLeft = 8;
let imageLoop = document.querySelector("#hm__images");

// For loop for making the keyboard
function createKeyboard() {
  for (i = 0; i < alphabet.length; i++) {
    letter = document.createElement("div");
    letter.classList.add("letter");
    letter.innerText = alphabet[i];
    letter.setAttribute("data-letter", alphabet[i]);
    letter.addEventListener("click", guessLetter);
    keyboard.appendChild(letter);
    imageLoop.setAttribute("src", imagesArr[counter]);
  }
  ownWordButton.addEventListener("click", displayInput);
  musicButton.addEventListener("click", displayMusic);
  wordForm.addEventListener("submit", setWord);
}
createKeyboard();

function guessLetter(evt) {
  evt.preventDefault();
  console.log(evt.target.innerText);
  guess.unshift(evt.target.innerText);
  checkforMatch(evt.target.innerText);
}

//Function for checking to see if the letters are correct or incorrect
function checkforMatch(f) {
  if (inputWord.length === 0) {
    let modalText = document.querySelector(".modal__text");
    modalBox.style.display = "flex";
    modalText.innerText = `Pick a word first!`;
  }
  if (inputWord.indexOf(f) === -1) {
    console.log("incorrect");
    gunshot.play();
    wrongLetters.push(f);
    counter++;
    guessesLeft--;
    guessCounter.innerText = `Guesses Left: ${guessesLeft}`;
    imageLoop.setAttribute("src", imagesArr[counter]);
    document
      .querySelector("[data-letter=" + f + "]")
      .classList.add("letter_no");
    if (counter === 8) {
      let modalText = document.querySelector(".modal__text");
      let fullWord = inputWord.join("");
      modalBox.style.display = "flex";
      modalText.innerText = `You Lost! The correct word was ${fullWord}`;
    }
    return;
  }
  console.log("correct letter");
  document.querySelector("[data-letter=" + f + "]").classList.add("letter_yes");
  addLetters(f);
}
function addLetters(f) {
  hiddenLetters.forEach(nodeLetter => {
    if (nodeLetter.innerText === f) {
      correctCounter++;
      gunshot.play();
      nodeLetter.classList.add("display_word");
    }
    if (correctCounter === inputWord.length) {
      let modalText = document.querySelector(".modal__text");
      let fullWord = inputWord.join("");
      modalBox.style.display = "flex";
      //   score++;
      //   totalScore.innerHTML
      modalText.innerText = `You Won!!! The correct word was ${fullWord}`;
      imageLoop.setAttribute("src", "images/hm_dancing.gif");
    }
  });
}
//For loop for creating the blanks for the entered word
function shootBlanks() {
  for (i = 0; i < inputWord.length; i++) {
    let blankLetter = document.createElement("div");
    blankLetter.classList.add("blank_style");
    wordBox.appendChild(blankLetter);
  }
  hiddenLetters = document.querySelectorAll(".blank_style");
  for (j = 0; j < inputWord.length; j++) {
    hiddenLetters[j].innerText = inputWord[j];
  }
}

//Music Button
function displayMusic(e) {
  e.preventDefault();
  musicPlayer.play();
  //   tumble();
}
//Button that allows for user input

function displayInput(e) {
  e.preventDefault();
  wordForm.classList.toggle("word_form_toggle");
}

function setWord(e) {
  if (inputWord.length > 0) {
    let modalText = document.querySelector(".modal__text");
    modalBox.style.display = "flex";
    modalText.innerText = `You already picked a word! Let's start over.`;
  }
  e.preventDefault();
  let str = userInput.value;
  str = str.toUpperCase();
  inputWord.push(...str.split(""));
  shootBlanks();
  wordForm.classList.toggle("word_form_toggle");
  userInput.value = "";
}

//Function for getting the random word from the API
let randomWordButton = document.querySelector(".game_buttons__random");
let apiURL = "https://random-word-api.herokuapp.com/word";
randomWordButton.addEventListener("click", apiInput);
function apiInput(e) {
  if (inputWord.length > 0) {
    let modalText = document.querySelector(".modal__text");
    modalBox.style.display = "flex";
    modalText.innerText = `You already picked a word! Let's start over.`;
  }
  e.preventDefault();
  fetch(apiURL)
    .then(res => {
      return res.json();
    })
    .then(res => {
      let randomStr = res[0];
      randomStr = randomStr.toUpperCase();
      inputWord.push(...randomStr.split(""));
      shootBlanks();
    });
}

//Function for resetting game
let resetButton = document.querySelector(".game_buttons__reset");
resetButton.addEventListener("click", resetGame);
function resetGame(evt) {
  evt.preventDefault();
  userInput.value = "";
  wrongLetters = [];
  guess = [];
  inputWord = [];
  counter = 0;
  guessesLeft = 8;
  correctCounter = 0;
  guessCounter.innerText = "Guesses Left: 8";
  while (keyboard.firstChild) {
    keyboard.removeChild(keyboard.firstChild);
  }
  while (wordBox.firstChild) {
    wordBox.removeChild(wordBox.firstChild);
  }
  createKeyboard();
}

function closeModal(evt) {
  modalBox.style.display = "none";
  resetGame(evt);
}
