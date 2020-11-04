'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hang Man

// Generate a word
// establish number of guesses
// Display appropriate blanks
// Ask for a letter
  // toUpperCase
// Show list of used letters
// Show found letter if appropriate
// Stop game if word is completed or number of guesses
// Show word at end regardless

const word = "HELLO";
const board = [];
const guessed = [];
for (let i = 0; i < word.length; i++) {
  board.push("_");
}

const checkLetter = (guess) => {

  if (/[a-zA-Z]/) { // NOT WORKING
    const guessCap = guess.toUpperCase();
    if (word.includes(guessCap) && !guessed.includes(guessCap)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guessCap) {
          board[i] = guessCap; 
        }
      }
      guessed.push(guessCap);
    } else if (!guessed.includes(guessCap)) {
      guessed.push(guessCap);
    }
  } else {
    console.log("NOT A LETTER. Try again.")
  }

  console.log("Past guesses:", guessed);
}

const checkWin = () => {
  if (!board.includes("_")) {
    console.log("Winner!")
  }
}

const hangman = (guess) => {
  checkLetter(guess);
  checkWin();
}

const printBoard = () => {
  console.log("Board:", board);
}

const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    hangman(guess);
    printBoard();
    getPrompt();
  });
}

printBoard(word);
getPrompt();