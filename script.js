function getRandomChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const playerScore = document.querySelector(".playerScore");
const player2Score = document.querySelector(".player2Score");
let playerScoreCount = 0;
let player2ScoreCount = 0;
const player = document.querySelector(".playerSprite");
const player2 = document.querySelector(".player2Sprite");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const headline = document.querySelector(".headline");
const feedback = document.querySelector(".feedback");

rockButton.addEventListener("mousedown", () => handleButtonClick("rock"));
paperButton.addEventListener("mousedown", () => handleButtonClick("paper"));
scissorsButton.addEventListener("mousedown", () => handleButtonClick("scissors"));

function handleButtonClick(playerChoice) {
  headline.textContent = `${playerChoice}`;
  feedback.textContent = "Can you beat Dr. Random?";
  player.classList.add("shake");
  player2.classList.add("shake");

  const player2Choice = getRandomChoice();

  player.addEventListener("animationend", function onAnimationEnd() {
    player.style.backgroundImage = `url(img/hand_${playerChoice}.png)`;
    player2.style.backgroundImage = `url(img/hand_${player2Choice}.png)`;
    player.classList.remove("shake");
    player2.classList.remove("shake");
    if (playerChoice === player2Choice) {
      feedback.textContent = "You and Dr. Random are tied!";
      console.log("It's a tie!");
    } else if ((playerChoice === "rock" && player2Choice === "scissors") || (playerChoice === "paper" && player2Choice === "rock") || (playerChoice === "scissors" && player2Choice === "paper")) {
      feedback.textContent = "You kicked Dr. Random's ass!";
      playerScoreCount++;
      console.log("You won!");
    } else {
      feedback.textContent = "Dr. Random stole your lunch money!";
      player2ScoreCount++;
      console.log("Dr. Random!");
    }

    playerScore.textContent = playerScoreCount;
    player2Score.textContent = player2ScoreCount;
    player.removeEventListener("animationend", onAnimationEnd);
  });
}
