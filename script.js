// All Century Cakes (14 types)
const allCakes = [
  "Streamer's Century Cake",
  "Crab-Colored Century Cake",
  "Fruit Century Cake",
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

// Players with their donated cakes (replace with real data)
const players = [
  { 
    name: "Player1", 
    cake: "Century Cake of Hype", 
    status: "Donated", 
    tooltip: "Mining Fortune" 
  },
  { 
    name: "Player2", 
    cake: "Cloudy Century Cake", 
    status: "Sold", 
    tooltip: "Foraging Fortune" 
  },
  { 
    name: "Player3", 
    cake: "Chocolate Century Cake", 
    status: "Donated", 
    tooltip: "Farming Fortune" 
  }
];

const usedCakes = new Set();

// DOM Elements
const playerList = document.getElementById('playerList');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const remainingCakes = document.getElementById('remainingCakes');

// Render Player List
function renderPlayers() {
  playerList.innerHTML = '';
  players.forEach(player => {
    const box = document.createElement('div');
    box.className = 'player-box';

    // Player Name
    const name = document.createElement('div');
    name.className = 'player-name';
    name.textContent = player.name;

    // Cake Image
    const cakeImage = document.createElement('img');
    cakeImage.className = 'cake-image';
    cakeImage.src = `/cakes/${player.cake.replace(/['\s]/g, '-').toLowerCase()}.png`;
    cakeImage.alt = player.cake;

    // Tooltip for Cake Effect
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = player.tooltip;
    cakeImage.appendChild(tooltip);

    // Cake Name
    const cakeName = document.createElement('div');
    cakeName.className = 'cake-name';
    cakeName.textContent = player.cake;

    // Status Badge
    const statusDiv = document.createElement('div');
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
}

// Update Progress Bar
function updateProgress() {
  const collected = usedCakes.size;
  const percentage = (collected / allCakes.length) * 100;
  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${collected}/${allCakes.length}`;
}

// Render Remaining Cakes
function renderRemainingCakes() {
  remainingCakes.innerHTML = '';
  allCakes.forEach(cake => {
    if (!usedCakes.has(cake)) {
      const li = document.createElement('li');
      li.textContent = cake;
      remainingCakes.appendChild(li);
    }
  });
}

// Initialize
renderPlayers();
updateProgress();
renderRemainingCakes();
