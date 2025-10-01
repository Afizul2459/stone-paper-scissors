let userScore = 0;
let computerScore = 0;
let roundCount = 0;

function playGame(userChoice) {
  const choices = ['stone', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Update choice display
  document.getElementById("user-choice").innerText = emoji(userChoice);
  document.getElementById("computer-choice").innerText = emoji(computerChoice);

  let result = "";

  if (userChoice === computerChoice) {
    result = "😅 It's a draw!";
  } else if (
    (userChoice === "stone" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "stone") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "🎉 You win this round!";
    userScore++;
  } else {
    result = "🤖 Computer wins this round!";
    computerScore++;
  }

  // Increase round counter
  roundCount++;

  // Update scoreboard
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("round-count").innerText = roundCount;

  // Show result
  document.getElementById("winner").innerText = result;
}

// helper to add emojis
function emoji(choice) {
  if (choice === "stone") return "✊ (Stone)";
  if (choice === "paper") return "✋ (Paper)";
  if (choice === "scissors") return "✌️ (Scissors)";
}