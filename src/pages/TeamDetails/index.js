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

  useEffect(() => {
    let loadedData = loadData(data);
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
        teamGames.filter((o) => {
          return !o.isUpcoming;
        })
      );
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
