import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import s from "./index.module.scss";
import DefaultLayout from "../../layouts/DefaultLayout";
// import Leaderboards from "../../components/Leaderboards";
import { loadData } from "../../utils/football";
import { data } from "../../content/data";
import { logoMap } from "../../content/logomap";
import backIcon from "../../assets/icons/chevron_left.svg";

export default function TeamDetails() {
  const history = useHistory();
  const { name } = useParams();
  const [parsedData, setParsedData] = useState({});

  useEffect(() => {
    console.log("team name:", name);
    let loadedData = loadData(data);
    setParsedData(loadedData);
  }, []);

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
    </DefaultLayout>
  );
}
