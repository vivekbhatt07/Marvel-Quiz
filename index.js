var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;

var userName = readlineSync.question(chalk.green("Enter your name: "));
console.log(chalk.yellow("----------------------------------------------"));
console.log('Welcome, ' + userName + " to " + chalk.bgRed("'ARE YOU A MARVEL FAN'"));
console.log(chalk.yellow("----------------------------------------------"));
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer) {
    score = score + 1;
    console.log(chalk.greenBright("You are Right !"))
  } else {
    console.log(chalk.red("You are Wrong !"));
    console.log(chalk.greenBright("Correct Answer: " + answer));
  }
  console.log("Your score is: " + score);
  console.log(chalk.yellow("----------------------------------------------"));
}

var qA = [{ question: "Question: Who was responsible for King T'Chaka's death? ", answer: "zemo" },
{ question: "Question: What is the name of the set of documents that regulate the activities of enhanced persons? ", answer: "sokovia accords" },
{ question: "Question: What is the Wi-Fi password Karl Modo hands to Doctor Strange? ", answer: "shamballa" },
{ question: "Question: Who is the Winter Soldier? ", answer: "bucky" },
{ question: "Question: What does the “E” in S.H.I.E.L.D. stand for? ", answer: "enforcement" },
{ question: "Question: Where did Thanos find the Soul Stone? ", answer: "vormir" },
{ question: "Question: Thor played what video game in Avengers: Endgame? ", answer: "fortnight" },
{ question: "Question: How many Infinity Stones are there? ", answer: "six" },
{ question: "Question: Where is Captain America from? ", answer: "brooklyn" },
{ question: "Question: Captain America’s shield and Bucky's arm are made of what? ", answer: "vibranium" }]

for (let i = 0; i < qA.length; i++) {
  var current = qA[i];
  play(current.question, current.answer)
}

console.log("Total Score : " + score);