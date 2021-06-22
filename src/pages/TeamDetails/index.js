import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import s from "./index.module.scss";
import DefaultLayout from "../../layouts/DefaultLayout";
import MatchList from "../../components/MatchList";
import { loadData, filterGamesByTeam } from "../../utils/football";
import { data } from "../../content/data";
import { logoMap } from "../../content/logomap";
import backIcon from "../../assets/icons/chevron_left.svg";

export default function TeamDetails() {
  const history = useHistory();
  const { name } = useParams();
  const [parsedData, setParsedData] = useState({});
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [matchHistory, setMatchHistory] = useState([]);
  const [stats, setStats] = useState([]);
  const [teamRanks, setTeamRanks] = useState([]);

  useEffect(() => {
    let loadedData = loadData(data);
    // sort teams descendingly by total points
    loadedData.teams.sort((a, b) => {
      return b.points - a.points;
    });
    // sort games descendingly by date (newest date first)
    loadedData.games = loadedData.games.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    setParsedData(loadedData);
  }, []);

  useEffect(() => {
    if (parsedData?.games?.length > 0) {
      const teamGames = filterGamesByTeam(parsedData.games, name);
      setUpcomingMatches(
        teamGames.filter((o) => {
          return o.isUpcoming;
        })
      );
      setMatchHistory(
        teamGames
          .filter((o) => {
            return !o.isUpcoming;
          })
          .reverse() // reversing a previously sorted list.
      );

      let team = parsedData?.teams?.find((o) => o.name === name);
      let newStats = [
        {
          label: "Current Rank",
          value: `#${parsedData?.teams?.findIndex((o) => o.name === name) + 1}`
        },
        {
          label: "Points",
          value: team.points
        },
        {
          label: "Games",
          value: team.played
        },
        {
          label: "Wins",
          value: team.wins
        },
        {
          label: "Losses",
          value: team.losses
        },
        {
          label: "Win rate",
          value: `${
            (team.wins / (team.wins + team.draws + team.losses)) * 100
          }%`
        },
        {
          label: "Goals",
          value: team.goals
        },
        {
          label: "Concessions",
          value: team.concessions
        },
        {
          label: "Goal Diff",
          value: team.g_diff
        },
        {
          label: "Goals per Game",
          value: (team.goals / team.played).toFixed(1)
        }
      ];
      setStats(newStats);
    }
  }, [parsedData]);

  return (
    <DefaultLayout>
      <div
        className={s.backBtn}
        onClick={() => {
          history.push("/");
        }}
      >
        <img alt="Go Back" src={backIcon} />
        <div>BACK TO LEADERBOARDS</div>
      </div>
      <div className={s.titleRow}>
        <div className={s.logo}>
          <img alt={name} src={logoMap[name]} />
        </div>
        <h1>{name.toUpperCase()}</h1>
      </div>
      <div className={s.statsRow}>
        {stats.map((o) => {
          return (
            <div className={s.statItem}>
              <div className={s.statValue}>{o.value}</div>
              <div className={s.statLabel}>{o.label.toUpperCase()}</div>
            </div>
          );
        })}
      </div>
      <div className={s.matchTables}>
        <MatchList
          title="MATCH RESULTS"
          list={matchHistory}
          mainTeam={name}
          hasScore
          bgColor="rgb(115 143 185)"
        />
        <MatchList
          title="UPCOMING MATCHES"
          list={upcomingMatches}
          mainTeam={name}
          bgColor="rgb(191 122 122)"
        />
      </div>
    </DefaultLayout>
  );
}
