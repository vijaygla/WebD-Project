document.getElementById("addButton").addEventListener("click", addPlayer);

let players = [];

function addPlayer() {
  const playerName = document.getElementById("playerName").value;
  const playerScore = parseInt(document.getElementById("playerScore").value);

  if (playerName && !isNaN(playerScore)) {
    players.push({ name: playerName, score: playerScore });
    updateLeaderboard();

    // Clear input fields
    document.getElementById("playerName").value = "";
    document.getElementById("playerScore").value = "";
  } else {
    alert("Please enter both name and score.");
  }
}

function updateLeaderboard() {
  // Sort players by score in descending order
  players.sort((a, b) => b.score - a.score);

  const leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = ""; // Clear the current leaderboard

  players.forEach((player) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${player.name}: ${player.score}`;
    leaderboard.appendChild(listItem);
  });
}
