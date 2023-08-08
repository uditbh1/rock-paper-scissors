let choices = ["rock", "paper", "scissors"];
let compScore = 0;
let userScore = 0;
function getCompChoice() {
  return choices[Math.floor(Math.random() * 3)];
}
function playRound(compSelection, userSelection) {
  if (compSelection === userSelection) {
    console.log("tie");
  }
  if (compSelection === "rock") {
    if (userSelection === "paper") {
      ++userScore;
      console.log("you win paper beats rock");
    } else if (userSelection === "scissors") {
      ++compScore;
      console.log("you loose rock beats scissors");
    } else {
      console.log("invalid input");
    }
  } else if (compSelection === "paper") {
    if (userSelection === "rock") {
      ++compScore;
      console.log("you loose paper beats rock");
    } else if (userSelection === "scissors") {
      ++userScore;
      console.log("you win scissors beats paper");
    } else {
      console.log("invalid input");
    }
  } else if (compSelection === "scissors") {
    if (userSelection === "rock") {
      ++userScore;
      console.log("you win rock beats scissors");
    } else if (userSelection === "paper") {
      ++compScore;
      console.log("you loose scissors beats paper");
    } else {
      console.log("invalid input");
    }
  } else {
    console.log("computer error");
  }
  console.log(`comp score current ${compScore}`);
  console.log(`user score current ${userScore}`);
}
function game() {
  const compSelection = getCompChoice();
  const userSelection = prompt(
    "Select rock, paper or scissors ?"
  ).toLowerCase();
  console.log(`comp selection ${compSelection}`);
  console.log(`user selection ${userSelection}`);
  console.log(playRound(compSelection, userSelection));
}
game();
game();
game();
game();
game();
if (compScore > userScore) {
  console.log("you loose");
  alert("you loose");
  console.log(`comp score final ${compScore}`);
  console.log(`user score final ${userScore}`);
} else if (compScore < userScore) {
  console.log("you win");
  alert("you win");
  console.log(`comp score final ${compScore}`);
  console.log(`user score final ${userScore}`);
} else if (compScore == userScore) {
  console.log("draw");
  alert("draw");
  console.log(`comp score final ${compScore}`);
  console.log(`user score final ${userScore}`);
}
