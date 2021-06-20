import { loadData } from "../utils/football";

describe("Sample tests", () => {
  let hello;

  beforeEach(() => {
    hello = "world";
  });

  it("test suites are working", () => {
    expect(hello).toBe("world");
  });
});

// describe("Data loading functions", () => {
//   const currentDate = "2021-05-05T14:00:00";
//   const data = [
//     {
//       score: { "Manchester United": 1, "Tottenham Hotspur": 1 },
//       date: "2021-05-05T08:00:00"
//     },
//     {
//       score: { "Manchester United": 2, Chelsea: 2 },
//       date: "2021-05-05T14:00:00"
//     },
//     {
//       score: { "Manchester United": 1, "Manchester City": 2 },
//       date: "2021-05-05T17:00:00"
//     }
//   ];

//   const parsedData = loadData(data, currentDate);

//   it("Upcoming dates are computed properly", () => {
//     expect(parsedData.games[0].isUpcoming).toBe(false);
//     expect(parsedData.games[1].isUpcoming).toBe(false);
//     expect(parsedData.games[2].isUpcoming).toBe(true);
//   });
// });
