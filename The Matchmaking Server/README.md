# The Matchmaking Server
*To write the startMatchmaking function that strings them all together in the correct order*

## 🚀 Tech Used
- JavaScript (ES6+)
- Node.js (for testing)

## 🔧 Features
- **Connect a player to a server to start there match.**
- **If player or server no found then it shows a small msg about what happend.**

## 🎯 The Challenge

**I have built a "Fake API" for you. It consists of three functions that take time to run. Your job is to write the startMatchmaking function that strings them all together in the correct order using either .then().catch() chaining OR modern async/await syntax.**

## 🧠 What I Learned
**I learned that you can't pass first .then() returned data i.e playerData to last .then() so we need to create variable so I created "data" that stores playerDate till end.**

## 💻 Code Snippet
**Async - await is easy so I pasted .then().chain() because I have take some more time to think if compare to async-await.**
```Javascript
function anotherStartMatchmaking(playerId) {
  console.log("Collecting player data...");
  let data;
  fetchPlayer(playerId)
    .then(function (playerData) {
      console.log("Finding region...");
      data = playerData;
      return findServer(playerData.region);
    })
    .then(function (server, playerData) {
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
```