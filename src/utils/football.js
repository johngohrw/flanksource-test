import { isAfter } from "date-fns";

const defaultCurrentDate = process.env.CURRENT_DATE;

// single parse to compute most of the data needed for tabulation
export const loadData = (data, currentDate = defaultCurrentDate) => {
  // initialize parsed result object
  let result = {
    teams: [],
    games: []
  };

  // main loop. loops through each game in data.
  data.forEach((game) => {
    // pushes a new entry to the main teams list
    // if the name doesnt exist in it yet.
    let currentTeams = Object.keys(game.score);
    currentTeams.forEach((teamName, index) => {
      if (result.teams.findIndex((o) => o.name === teamName) === -1) {
        result.teams.push({
          name: teamName,
          played: 0,
          goals: 0,
          concessions: 0,
          wins: 0,
          losses: 0,
          draws: 0,
          g_diff: 0,
          points: 0
        });
      }
    });

    // recomputes values based on game result.
    currentTeams.forEach((teamName, index) => {
      const currentTeamIndex = result.teams.findIndex(
        (o) => o.name === teamName
      );
      const currentTeam = result.teams[currentTeamIndex];
      const opponentTeamIndex = result.teams.findIndex(
        (o) => o.name === currentTeams[index ^ 1]
      );
      const opponentTeam = result.teams[opponentTeamIndex];
      const opponentName = currentTeams[index ^ 1];

      // if game has happened
      if (game.score[teamName] !== null) {
        // update games played
        currentTeam.played += 1;

        // update goals (& concessions for opponent team)
        currentTeam.goals += game.score[teamName];
        opponentTeam.concessions += game.score[teamName];

        // update goal differences based on current team's goals
        currentTeam.g_diff += game.score[teamName];
        opponentTeam.g_diff -= game.score[teamName];

        // update wins, losses, draws, and points (for current team only)
        // also update points (for current team)
        if (game.score[teamName] > game.score[opponentName]) {
          currentTeam.wins += 1;
          currentTeam.points += 3;
        } else if (game.score[teamName] < game.score[opponentName]) {
          currentTeam.losses += 1;
        } else if (game.score[teamName] === game.score[opponentName]) {
          currentTeam.draws += 1;
          currentTeam.points += 1;
        }
      }
    });

    // compute if a game is upcoming or already started
    const gameIsUpcoming = isAfter(new Date(game.date), new Date(currentDate));

    result.games.push({
      ...game,
      isUpcoming: gameIsUpcoming
    });
  });

  console.log("LOADDATA RESULT", result); // todo: remove
  return result;
};

export const filterGamesByTeam = (games, name) => {
  let result = [];
  games.forEach((game) => {
    let teams = Object.keys(game.score);
    if (teams.includes(name)) {
      result.push(game);
    }
  });
  return result;
};
