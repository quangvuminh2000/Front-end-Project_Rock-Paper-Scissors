let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const choices = ["r", "p", "s"];
const numOfChoices = choices.length;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * numOfChoices)];
}

function makeWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function showComputerChoice(computerChoice) {
  if (computerChoice === "r") {
    rock_div.classList.add("computer-choice");
  }
  if (computerChoice === "p") {
    paper_div.classList.add("computer-choice");
  }
  if (computerChoice === "s") {
    scissors_div.classList.add("computer-choice");
  }
  setTimeout(hideChoices, 1000);
}

function hideChoices() {
  rock_div.classList.remove("computer-choice", "user-choice");
  paper_div.classList.remove("computer-choice", "user-choice");
  scissors_div.classList.remove("computer-choice", "user-choice");
}

function userResult(userChoice) {
  return `<span style="color:#00E4F2;">${makeWord(userChoice)}</span>`;
}

function computerResult(computerChoice) {
  return `<span style="color:#F9F345;">${makeWord(computerChoice)}</span>`;
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  showComputerChoice(computerChoice);
  result_p.innerHTML = `${userResult(userChoice)} beats ${computerResult(
    computerChoice
  )}. You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  showComputerChoice(computerChoice);
  result_p.innerHTML = `${userResult(
    userChoice
  )} gets beaten by ${computerResult(computerChoice)}. You lose!`;
}

function draw(userChoice, computerChoice) {
  showComputerChoice(computerChoice);
  result_p.innerHTML = `${userResult(userChoice)} equals ${computerResult(
    computerChoice
  )}. It's a draw!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
    rock_div.classList.add("user-choice");
  });

  paper_div.addEventListener("click", () => {
    game("p");
    paper_div.classList.add("user-choice");
  });

  scissors_div.addEventListener("click", () => {
    game("s");
    scissors_div.classList.add("user-choice");
  });
}

main();
