const weekendMatches = [
  { team: "Team Alpha", kills: 12, placement: 1 },
  { team: "Team Beta", kills: 5, placement: 4 },
  { team: "Team Alpha", kills: 8, placement: 2 },
  { team: "Team Gamma", kills: 2, placement: 10 },
  { team: "Team Beta", kills: 15, placement: 1 },
  { team: "Team Delta", kills: 0, placement: 15 },
];

// calculating final points on basics on how many matched palyed
const calculateFinalPoints = (sameTeamDataArr) => {
  let finalTotalPointsObtain = 0;
  sameTeamDataArr.forEach((info) => {
    finalTotalPointsObtain += info.points;
  });

  return {
    team: sameTeamDataArr[0].team,
    finalTotalPoints: finalTotalPointsObtain,
  };
};

// scoring rules:
// 1 Kill = 1 Point
// 1st Place = 15 Points
// 2nd Place = 12 Points
// 3rd-5th Place = 5 Points
// Rest of Place = 0 Points
// calculating points according to scoring rules
const findTotalPoints = (matchesDataArr) => {
  let totalPointsArr = matchesDataArr.map((info) => {
    // one variable with multiple contitions
    let placementPoints = 0;
    switch (true) {
      case info.placement == 1:
        placementPoints = 15;
        break;
      case info.placement == 2:
        placementPoints = 12;
        break;
      case info.placement >= 3 && info.placement <= 5:
        placementPoints = 5;
        break;
      default:
        placementPoints = 0;
    }
    // as 1 kill = 1 points we don't need extra logic
    let finalPoints = parseInt(info.kills) + placementPoints;

    return { team: info.team, totalPoints: finalPoints };
  });
  return totalPointsArr;
};

function generateLeaderboard(matches) {
  // 1. Calculate the points for each individual match based on the rules.
  let pointsArr = findTotalPoints(matches);

  // 2. Combine the scores so each team only has ONE final object.
  //   final array for totalPoints without sorting
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

  // 3. Sort the final array from highest points to lowest points.
  let sortedTotalPoints = totalPoints.sort(
    (a, b) => b.finalTotalPoints - a.finalTotalPoints,
  );

  // return the final array
  return sortedTotalPoints;
}

console.log(generateLeaderboard(weekendMatches));

/* EXPECTED OUTPUT:
[
  { team: 'Team Alpha', totalPoints: 47 }, 
  { team: 'Team Beta', totalPoints: 40 }, 
  { team: 'Team Gamma', totalPoints: 2 }, 
  { team: 'Team Delta', totalPoints: 0 }
]
*/

function generateScoreBoard(matches) {
  // 1. Calculate points and combine teams in ONE pass using .reduce()
  const scoreboard = matches.reduce((tally, match) => {
    // Figure out the placement points
    let placementPoints = 0;
    if (match.placement === 1) placementPoints = 15;
    else if (match.placement === 2) placementPoints = 12;
    else if (match.placement >= 3 && match.placement <= 5) placementPoints = 5;

    // Calculate this specific match's total
    let matchPoints = match.kills + placementPoints;

    // If the team isn't on our scoreboard yet, add them with 0 points
    if (!tally[match.team]) {
      tally[match.team] = 0;
    }

    // Add this match's points to their running total
    tally[match.team] += matchPoints;

    return tally; // Pass the updated scoreboard to the next loop
  }, {}); // {} means our scoreboard starts as an empty object

  // 2. Convert the scoreboard object back into an array and sort it
  return Object.keys(scoreboard)
    .map((teamName) => ({ team: teamName, totalPoints: scoreboard[teamName] }))
    .sort((a, b) => b.totalPoints - a.totalPoints);
}
console.log(generateScoreBoard(weekendMatches));