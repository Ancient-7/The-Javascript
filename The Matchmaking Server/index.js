function fetchPlayer(playerId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (playerId === 999) reject("Error: Player account is banned.");
      else
        resolve({
          id: playerId,
          name: "Nishu",
          rank: "Conqueror",
          region: "Asia",
        });
    }, 1000);
  });
}

function findServer(region) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (region === "Mars") reject("Error: No servers available on Mars.");
      else resolve({ ip: "104.22.5.1", ping: 45, region: region });
    }, 1000);
  });
}

function connectToServer(player, server) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        `✅ Match Found! ${player.name} connected to ${server.region} server with ${server.ping}ms ping.`,
      );
    }, 500);
  });
}

// ==========================================
// 🛠️ WRITE YOUR CODE BELOW THIS LINE 🛠️
// ==========================================

async function startMatchmaking(playerId) {
  console.log("Starting matchmaking process...");

  // Your code here!
  // Call fetchPlayer, then findServer, then connectToServer.
  // Make sure to console.log the final success message!
  try {
    let playerDetails = await fetchPlayer(playerId);
    // console.log(playerDetails)
    console.log("Finding server...");
    let server = await findServer(playerDetails.region);
    // console.log(server)
    console.log(`Connecting to ${playerDetails.region}...`);
    let connected = await connectToServer(playerDetails, server);
    console.log(connected);
  } catch (error) {
    console.log(error);
  }
}
function anotherStartMatchmaking(playerId) {
  console.log("Collecting player data...");
  let data;
  fetchPlayer(playerId)
    .then(function (playerData) {
      console.log("Finding region...");
      data = playerData;
      return findServer(playerData.region);
    })
    .then(function (server) {
      console.log(`Connecting to ${data.region}...`);
      return connectToServer(data, server);
    })
    .then(function (msg) {
      console.log(msg);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// --- TEST CASES ---
// Test 1: Should succeed
await startMatchmaking(1);
console.log("\nAnother matchmaking!\n")
await anotherStartMatchmaking(1);

// Test 2: Should fail at step 1
// startMatchmaking(999);
// console.log("Another matchmaking!")
// anotherStartMatchmaking(999);
