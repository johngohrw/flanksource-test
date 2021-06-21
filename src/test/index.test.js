import {
  loadData,
  filterGamesByTeam,
  filterGamesByUpcoming
} from "../utils/football";

describe("Sample tests", () => {
  let hello;

  beforeEach(() => {
    hello = "world";
  });

  it("test suites are working", () => {
    expect(hello).toBe("world");
  });
});

describe("Data loading functions", () => {
  const currentDate = "2021-05-05T14:00:00";
  const testData = [
    {
      score: { "Manchester United": 4, "Tottenham Hotspur": 1 },
      date: "2021-05-05T08:00:00"
    },
    {
      score: { "Manchester United": 2, Chelsea: 2 },
      date: "2021-05-05T14:00:00"
    },
    {
      score: { "Manchester United": 1, "Manchester City": 2 },
      date: "2021-05-05T17:00:00"
    }
  ];
  const parsedData = loadData(testData, currentDate);

  let manUnited = parsedData.teams.find((o) => o.name === "Manchester United");
  let manCity = parsedData.teams.find((o) => o.name === "Manchester City");
  let chelsea = parsedData.teams.find((o) => o.name === "Chelsea");
  let tottenham = parsedData.teams.find((o) => o.name === "Tottenham Hotspur");

  it("Number of participating teams are correct", () => {
    expect(parsedData.teams.length).toBe(4);
  });

  it("Number of games are correct", () => {
    expect(parsedData.games.length).toBe(3);
  });

  it("Upcoming dates are computed properly", () => {
    expect(parsedData.games[0].isUpcoming).toBe(false);
    expect(parsedData.games[1].isUpcoming).toBe(false);
    expect(parsedData.games[2].isUpcoming).toBe(true);
  });

  it("Games played are computed properly", () => {
    expect(manUnited.played).toBe(3);
    expect(manCity.played).toBe(1);
    expect(chelsea.played).toBe(1);
    expect(tottenham.played).toBe(1);
  });

  it("Goals are computed properly", () => {
    expect(manUnited.goals).toBe(7);
    expect(manCity.goals).toBe(2);
    expect(chelsea.goals).toBe(2);
    expect(tottenham.goals).toBe(1);
  });

  it("Concessions are computed properly", () => {
    expect(manUnited.concessions).toBe(5);
    expect(manCity.concessions).toBe(1);
    expect(chelsea.concessions).toBe(2);
    expect(tottenham.concessions).toBe(4);
  });

  it("Goal differences are computed properly", () => {
    expect(manUnited.g_diff).toBe(2);
    expect(manCity.g_diff).toBe(1);
    expect(chelsea.g_diff).toBe(0);
    expect(tottenham.g_diff).toBe(-3);
  });

  it("Wins are computed properly", () => {
    expect(manUnited.wins).toBe(1);
    expect(manCity.wins).toBe(1);
    expect(chelsea.wins).toBe(0);
    expect(tottenham.wins).toBe(0);
  });

  it("Draws are computed properly", () => {
    expect(manUnited.draws).toBe(1);
    expect(manCity.draws).toBe(0);
    expect(chelsea.draws).toBe(1);
    expect(tottenham.draws).toBe(0);
  });

  it("Losses are computed properly", () => {
    expect(manUnited.losses).toBe(1);
    expect(manCity.losses).toBe(0);
    expect(chelsea.losses).toBe(0);
    expect(tottenham.losses).toBe(1);
  });

  it("Points are computed properly", () => {
    expect(manUnited.points).toBe(4);
    expect(manCity.points).toBe(3);
    expect(chelsea.points).toBe(1);
    expect(tottenham.points).toBe(0);
  });

  it("Game list can be properly filtered with a team's name", () => {
    const filteredGames = filterGamesByTeam(parsedData.games, "Chelsea");
    expect(filteredGames.length).toBe(1);
    expect(Object.keys(filteredGames[0].score).includes("Chelsea")).toBe(true);
  });
});
