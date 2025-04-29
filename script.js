// All Century Cakes (14 types)
const allCakes = [
  "Streamer's Century Cake",
  "Crab-Colored Century Cake",
  "aPunch Century Cake",
  "Latest Update Century Cake",
  "Potato-Style Century Cake",
  "Pet Rock Century Cake",
  "Barry Century Cake",
  "Sea Emperor Century Cake",
  "Century Cake of the Next Dungeon Floor",
  "Chocolate Century Cake",
  "Cloudy Century Cake",
  "Century Cake of Hype",
  "Undead Century Cake",
  "Not-a-lie Century Cake"
];

let players = [];
const usedCakes = new Set();

// DOM Elements
const playerList = document.getElementById("playerList");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const remainingCakes = document.getElementById("remainingCakes");
const collectedText = document.querySelector(".collected-text");
const missingCount = document.getElementById("missingCount");

// Load players from players.json
async function loadPlayers() {
  try {
    const response = await fetch("/players.json");
    const data = await response.json();
    players = data.players || [];
  } catch (error) {
    players = [];
    console.error("Error loading players.json. Using empty data.");
  }
}

// Render Player List
async function renderPlayers() {
  await loadPlayers();
  playerList.innerHTML = "";
  usedCakes.clear();

  players.forEach((player) => {
    const box = document.createElement("div");
    box.className = "player-box";

    // Player Name
    const name = document.createElement("div");
    name.className = "player-name";
    name.textContent = player.name;

    // Cake Image
    const cakeImage = document.createElement("img");
    cakeImage.className = "cake-image";
    cakeImage.src = `cakes/${player.cake.replace(/['\s]/g, "-").toLowerCase()}.png`;
    cakeImage.alt = player.cake;

    // Tooltip
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = player.tooltip.trim();
    cakeImage.appendChild(tooltip);

    // Cake Name
    const cakeName = document.createElement("div");
    cakeName.className = "cake-name";
    cakeName.textContent = player.cake;

    // Status Badge
    const statusDiv = document.createElement("div");
    statusDiv.className = `status ${player.status.toLowerCase()}`;
    statusDiv.textContent = player.status;

    // Append elements
    box.appendChild(name);
    box.appendChild(cakeImage);
    box.appendChild(cakeName);
    box.appendChild(statusDiv);
    playerList.appendChild(box);

    // Track used cakes
    usedCakes.add(player.cake);
  });

  updateProgress();
  renderRemainingCakes();
}

// Update Progress Bar & Counters
function updateProgress() {
  const collected = usedCakes.size;
  const total = allCakes.length;
  const percentage = (collected / total) * 100;
  const missing = total - collected;

  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${collected}/${total}`;
  collectedText.textContent = `Collected Cakes (${collected}/${total}):`;
  missingCount.textContent = missing;
}

// Render Remaining Cakes
function renderRemainingCakes() {
  remainingCakes.innerHTML = "";
  allCakes.forEach((cake) => {
    if (!usedCakes.has(cake)) {
      const li = document.createElement("li");
      li.textContent = cake;
      remainingCakes.appendChild(li);
    }
  });
}

// Smooth scroll for player list
document.querySelector(".player-scroll").addEventListener("wheel", (e) => {
  e.preventDefault();
  const scroll = e.currentTarget.scrollTop;
  e.currentTarget.scrollTop = scroll + e.deltaY;
});

// Initialize
document.addEventListener("DOMContentLoaded", async () => {
  await renderPlayers();
});
