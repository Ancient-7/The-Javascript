# BGMI Tournament Leaderboard Aggregator 🏆

A vanilla JavaScript utility built to transform raw tournament match data into a clean, sorted, and scored leaderboard.

## 🚀 Tech Stack

- JavaScript (ES6+)
- Node.js (for testing)

## 🎯 The Challenge

The goal of this project was to take an array of raw match objects and calculate a final leaderboard based on strict custom scoring rules:

- **1 Kill** = 1 Point
- **1st Place** = 15 Points
- **2nd Place** = 12 Points
- **3rd-5th Place** = 5 Points
- **Rest of Place** = 0 Points

## 🧠 What I Learned

**Well I learned that I can solve anything if I have enough knowledge about that perticular topic, I already knew how to solve this but my apporach was wrong, like I was doing random things without following steps, then I decided to break this problem in to small set of small problems, then it become so easy for me. For example before I was thinking I need to calculate totalPoints for each team without repeating, but after I break it down like first I need to seperate repeating team and then calculate the total points.**

## 💻 Code Snippet

Here is the core logic I used to calculate a single team's points:

```javascript
let totalPoints = [];

//   array of all team name
let allTeamRaw = pointsArr.map((matchInfo) => matchInfo.team);

//   array of all team without repeating
let allTeam = new Set([...allTeamRaw]);

//   saperating same teams and calculating final total points
allTeam.forEach((teamName) => {
  let sameTeam = [];
  for (let i = 0; i <= pointsArr.length - 1; i++) {
    if (pointsArr[i].team === teamName) {
      sameTeam.push({
        team: pointsArr[i].team,
        points: pointsArr[i].totalPoints,
      });
    }
  }
  // calculate final points array with each sameTeam array
  let totalPointsArr = calculateFinalPoints(sameTeam);
  totalPoints.push(totalPointsArr);
});
```
