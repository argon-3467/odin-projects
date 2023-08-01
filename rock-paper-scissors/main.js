let playerScore = 0;
let computerScore = 0;
let msg = document.querySelector(".msg");
let videoPlayer = document.querySelector(".choices");

function getComputerChoice() {
  let v = Math.random() * 3;
  if (v < 1) return "rock";
  else if (v < 2) return "paper";
  else return "scissor";
}

function playRound(p, c) {
  // 1 means player wins
  // 0 means draw
  // -1 means computer wins
  msg.textContent = `computer choose: ${c} `;
  if (c == "rock" && p == "paper") playAnimation("paperVsRock", 1);
  else if (c == "paper" && p == "scissor") playAnimation("scissorsVsPaper", 1);
  else if (c == "scissor" && p == "rock") playAnimation("rockVsScissors", 1);
  else if (c == "rock" && p == "scissor") playAnimation("rockVsScissor", -1);
  else if (c == "paper" && p == "rock") playAnimation("paperVsRock", -1);
  else if (c == "scissor" && p == "paper") playAnimation("scissorsVsPaper", -1);
  else if (c == "rock" && p == "rock") playAnimation("draw", 0);
  else if (c == "paper" && p == "paper") playAnimation("draw", 0);
  else if (c == "scissor" && p == "scissor") playAnimation("draw", 0);
  else console.log("Invalid inputs");
}

function playAnimation(video, result) {
  if (result == 1) {
    playerScore++;
    msg.textContent += "You Won the round";
  } else if (result == -1) {
    computerScore++;
    msg.textContent += "You Lost the round";
  } else {
    msg.textContent += "It was a Draw";
  }
  displayScore(playerScore, computerScore);

}

function displayScore(p, c) {
  let score = document.querySelector(".score");
  score.textContent = `${p} - ${c}`;
  score.style.cssText = "";
  if (p == 5) {
    videoPlayer.textContent = "You Won the game";
    msg.textContent = "Game Over";
  } 
  if (c == 5) {
    videoPlayer.textContent = "You Lost the game";
    msg.textContent = "Game Over";
  }
}

let images = document.querySelectorAll("img");
images.forEach((image) =>
  image.addEventListener("mouseover", () => {
    msg.textContent = `${image.classList}`;
  })
);

images.forEach((image) =>
  image.addEventListener("mouseleave", () => {
    msg.textContent = "Decide Fast";
  })
);

images.forEach((image) =>
  image.addEventListener("click", () => {
    let playerSelection = image.getAttribute("class");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  })
);
