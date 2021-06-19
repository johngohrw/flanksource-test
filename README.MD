
 FlankSource JS code exam

 The task here is to create and display using the data in data.js:

 1. A league table (see https:www.premierleague.com/tables for example)
    the following stats:

    a) win, loss and draw counts
    b) a goal difference count per team (all goals scored minus all goals conceded)
    c) points total
    d) games played.

 2. A fixture list representing both past and future games. Clicking on a team name should
    transition to the fixture list and there should be easy navigation back to the table.
    See, for an example of a fixture list:
    https:www.premierleague.com/clubs/11/Manchester-City/fixtures

  For those unfamilier with football/sport (forgive us for making you face it):

  1. A win is worth 3 points, a loss 0 points and a draw 1 point.
  2. Goal difference is the difference between all goals scored and all goals conceded.
     It can be negative.
  3. The teams in the table are shown in points order with the team with the
     most at the top.
  4. Fixture lists show past results and future fixtures, ordered from earliest to latest.

 Exam rules:

 1. There is no time limit.
 2. Submission should include both a:
    a) working live code example in this sandbox.
    b) commit to a public git repo (there is a github connector if you want to make use of it).
 3. Decisions that obviously improve the output will be credited where sensible.
    Time consuming additions will only be credited where all other criteria are fulfilled
    well and you will not be penalised for not going above and beyond.
    The challenge is busy enough.
 4. Presentation should be neat but does not need embellishment.
 5. Please note your repo is meant to demonstrate source control practices –
    please break up commits into reasonably sized problem solving steps.

 Constraints:

 1. For the purposes of the task, the current date is: 5 May 2021 at 2pm.
 2. Expected output date format is: 14/10, 14:48 (ie, <day:number>/<month:number>, <24hr-time:number>).
 3. One loop over the data from data.js is permitted for creating structured data to work from,
    after which copying and sorting are acceptable.
 4. Use "date-fns" (https:date-fns.org/) for date formatting and "jest" (https:jestjs.io/)
    for unit testing.
 5. Add sufficient unit tests for important data operations.
    A unit test should serve as a regression test – it should alert us changes that
    break functionality as well as prove correct handling of bad data.

 Please feel free to let us know if the test was overly difficult or easy or problematic in any way.
