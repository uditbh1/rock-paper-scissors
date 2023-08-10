let compScore = 0;
let userScore = 0;
let userSelection = "";
let compSelection = "";
let userScoreHtml = document.getElementById("userScoreHtml");
let compScoreHtml = document.getElementById("compScoreHtml");
let resultsHeader = document.getElementById("resultsHeader");
let resultsText = document.getElementById("resultsText");
let originalHeader = resultsHeader.innerText;
let originalText = resultsText.innerText;
let topG = document.getElementById("topG");
let div = document.createElement("div");
function divSet() {
  //this function will add a div of instruction after reset button to tell user to reset to play again
  div.innerText = "(Press reset to play again)";
  div.style.color = "black";
  div.style.fontWeight = "bold";
  div.style.paddingTop = "10px";
  topG.appendChild(div); // we add the div to topmost heading after reset button to instruct the user to reset the match to play again
}
function getCompChoice() {
  // this function selects random values out of choices array
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
function playRound(compSelection, userSelection) {
  if (compSelection === userSelection) {
    resultsHeader.innerHTML = "TIE ROUND";
    resultsText.innerHTML = "This was a tie!!";
  } else if (compSelection === "rock") {
    if (userSelection === "paper") {
      ++userScore;
      resultsHeader.innerHTML = "YOU WIN THIS ROUND";
      resultsText.innerHTML = "Paper Beats Rock";
      // console.log("you win paper beats rock");
    } else if (userSelection === "scissors") {
      ++compScore;
      resultsHeader.innerHTML = "YOU LOOSE THIS ROUND";
      resultsText.innerHTML = "Rock Beats Scissors";
      // console.log("you loose rock beats scissors");
    }
    // else {
    //   console.log("invalid input");
    // }
  } else if (compSelection === "paper") {
    if (userSelection === "rock") {
      ++compScore;
      resultsHeader.innerHTML = "YOU LOOSE THIS ROUND";
      resultsText.innerHTML = "Paper Beats Rock";
      // console.log("you loose paper beats rock");
    } else if (userSelection === "scissors") {
      ++userScore;
      resultsHeader.innerHTML = "YOU WIN THIS ROUND";
      resultsText.innerHTML = "Scissors Beats Paper";
      // console.log("you win scissors beats paper");
    }
    // else {
    //   console.log("invalid input");
    // }
  } else if (compSelection === "scissors") {
    if (userSelection === "rock") {
      ++userScore;
      resultsHeader.innerHTML = "YOU WIN THIS ROUND";
      resultsText.innerHTML = "Rock Beats Scissors";
      // console.log("you win rock beats scissors");
    } else if (userSelection === "paper") {
      ++compScore;
      resultsHeader.innerHTML = "YOU LOOSE THIS ROUND";
      resultsText.innerHTML = "Scissors Beats Paper";
      // console.log("you loose scissors beats paper");
    }
    // else {
    //   console.log("invalid input");
    // }
  }
  // else {
  //   console.log("computer error");
  // }
  userScoreHtml.innerHTML = userScore;
  compScoreHtml.innerHTML = compScore;
  // console.log(`comp score current ${compScore}`);
  // console.log(`user score current ${userScore}`);
}

const reset = document.getElementById("reset"); //reset button
reset.addEventListener("click", () => {
  // console.log("reset clicked"); //resets scores, display html to same as start and unfreezes each button to play again
  compScore = 0;
  userScore = 0;
  userSelection = "";
  compSelection = "";

  userScoreHtml.innerHTML = userScore;
  compScoreHtml.innerHTML = compScore;
  resultsHeader.innerHTML = originalHeader;
  resultsText.innerHTML = originalText;
  const buttons = document.querySelectorAll(".imgs");
  buttons.forEach((button) => {
    button.disabled = false;
  });
  topG.removeChild(div); //removes the reset instruction
});

function game() {
  //main function
  const buttons = document.querySelectorAll(".imgs"); //means the 3 rock paper scissors buttons
  buttons.forEach((button) => {
    //each button will be traversed one by one and will listen click event
    button.addEventListener("click", (e) => {
      userSelection = e.target.alt; //inputs user selection on the basis of alt of the image clicked
      compSelection = getCompChoice(); //random selection from choices array of rock ppr scissors
      if (userSelection === compSelection) {
        button.classList.add("tie"); // adds a class of tie which makes black color around the selection for tie it is black
        window.setTimeout(function () {
          // removes the tie color after 1 second
          button.classList.remove("tie");
        }, 1000);
      } else {
        button.classList.add("user"); //same logic as tie
        window.setTimeout(function () {
          button.classList.remove("user");
        }, 1000);
        const compButton = document.querySelector(`[alt="${compSelection}"]`); //this selection marks the border of red color around the image instead we need it around the button
        compButton.parentElement.classList.add("comp"); // since it's parent element is button around which we have to add the border
        window.setTimeout(function () {
          compButton.parentElement.classList.remove("comp"); //same logic as tie
        }, 1000);
      }
      // console.log(`user ${userSelection}`);
      // console.log(`comp ${compSelection}`);
      playRound(compSelection, userSelection); //passes user choice and computer choice to playround function where each round is evaluated
      if (compScore == 5 || userScore == 5) {
        //if user or computer any one of them reaches 5 score first then
        // userScoreHtml.innerHTML = userScore;
        // compScoreHtml.innerHTML = compScore;
        buttons.forEach((button) => {
          //we make rock paper scissors button disabled
          button.disabled = true;
        });
        divSet();
        result(compScore, userScore); // this function evaluates the final result
      }
    });
  });
  //   playRound(compSelection, userSelection);
  //   btn.addEventListener("click", function (e) {
  //     console.log(e.target.alt);
  //   });

  //   console.log(`comp selection ${compSelection}`);
  //   console.log(`user selection ${userSelection}`);
}

game();

let result = (compScore, userScore) => {
  //final function which calculates final score of whoever scores 5 points first
  if (compScore > userScore) {
    // console.log("you loose");
    resultsHeader.innerHTML = "YOU LOOSE";
    resultsText.innerHTML = "The bot beat you 😞";
  } else if (compScore < userScore) {
    // console.log("you win");
    resultsHeader.innerHTML = "YOU WIN";
    resultsText.innerHTML = "You beat the bot 😄";
  } else if (compScore == userScore) {
    // console.log("draw");
    resultsHeader.innerHTML = "DRAW";
    resultsText.innerHTML = "Draw";
  }
  // console.log(`comp score final ${compScore}`);
  // console.log(`user score final ${userScore}`);
};
