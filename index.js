var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;

var userName = readlineSync.question(chalk.green("Enter your name: "));
console.log(chalk.yellow("----------------------------------"));
console.log('Welcome, ' + userName + " to " + chalk.bgMagenta("'DO YOU KNOW VIVEK'"));
console.log(chalk.yellow("----------------------------------"));
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    score = score + 1;
    console.log(chalk.greenBright("You are Right !"))
  } else {
    console.log(chalk.red("You are Wrong !"))
  }
  console.log("Your score is: " + score);
  console.log(chalk.yellow("----------------------------------"));
}

var qA = [{ question: "where do I live ? ", answer: "rudrapur" },
{ question: "My favorite outdoor game ? ", answer: "football" },
{ question: "My favorite indoor game ? ", answer: "chess" },
{ question: "My favorite mobile game ? ", answer: "bgmi" },
{ question: "My favorite computer game ? ", answer: "gta" },
{ question: "My favorite color ? ", answer: "blue" },
{ question: "My favorite animal ? ", answer: "dog" },
{ question: "My favorite anime character ? ", answer: "gojo" },
{ question: "My favorite anime ? ", answer: "demon slayer" },
{ question: "My favorite movie ? ", answer: "avengers" }]

for (let i = 0; i < qA.length; i++) {
  var current = qA[i];
  play(current.question, current.answer)
}