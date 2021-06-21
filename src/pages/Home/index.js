import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Leaderboards from "../../components/Leaderboards";
import { loadData } from "../../utils/football";
import { data } from "../../content/data";

export default function Home() {
  const [parsedData, setParsedData] = useState({});

  useEffect(() => {
    let loadedData = loadData(data);
    // sort descendingly by total points
    loadedData.teams.sort((a, b) => {
      return b.points - a.points;
    });
    setParsedData(loadedData);
  }, []);

  return (
    <DefaultLayout>
      <h1>LEADERBOARDS</h1>
      <Leaderboards list={parsedData?.teams} />
    </DefaultLayout>
  );
}
