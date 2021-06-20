import { isAfter } from "date-fns";

const defaultCurrentDate = process.env.CURRENT_DATE;

// single parse to compute most of the data needed for tabulation
export const loadData = (data, currentDate = defaultCurrentDate) => {
  // initialize parsed result object
  let result = {
    teams: [],
    games: []
  };

  // main loop
  data.forEach((game) => {
    // compile a list of all team names
    let teams = Object.keys(game.score);

    teams.forEach((teamName) => {
      // pushes a new entry to list if the name doesnt exist yet.
      if (result.teams.findIndex((o) => o.name === teamName) === -1) {
        result.teams.push({
          name: teamName,
          played: 0,
          wins: 0,
          losses: 0,
          draws: 0,
          g_diff: 0,
          points: 0
        });
      }

      // recomputes values based on game result.
    });

    // compute if a game is upcoming or already started
    const gameIsUpcoming = isAfter(new Date(game.date), new Date(currentDate));

    result.games.push({
      ...game,
      isUpcoming: gameIsUpcoming
    });
  });

  console.log(result);
  return result;
};
