import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import s from "./index.module.scss";

import { loadData } from "../../utils/football";

import { data } from "../../content/data";

export default function Home() {
  const [parsedData, setParsedData] = useState({});

  useEffect(() => {
    setParsedData(loadData(data));
  }, []);

  return (
    <DefaultLayout>
      <h1>LEADERBOARDS</h1>
      <Leaderboards list={parsedData?.teams} />
    </DefaultLayout>
  );
}

function Leaderboards() {
  return (
    <div className={s.tableWrapper}>
      <div className={s.tableHeader}></div>
    </div>
  );
}
