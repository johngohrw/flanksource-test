import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { loadData } from "../../utils/football";
import { data } from "../../content/data";
import s from "./index.module.scss";

export default function Home() {
  const [parsedData, setParsedData] = useState({});

  useEffect(() => {
    let loadedData = loadData(data);
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

function Leaderboards({ list, ...props }) {
  const columns = [
    {
      label: "RANK",
      render: (row, index) => {
        return <div>{index + 1}</div>;
      },
      style: { width: "68px", textAlign: "center" }
    },
    {
      label: "",
      render: (row, index) => {
        return (
          // <div className={s.tableLogo}>
          //   <img src={row.logo} />
          // </div>
          <>logo</>
        );
      },
      style: { width: "68px" }
    },
    {
      label: "CLUB",
      render: (row, index) => {
        return <div>{row.name}</div>;
      },
      style: { width: "", flexGrow: 1, minWidth: "170px", textAlign: "left" }
    },
    {
      label: "GAMES PLAYED",
      render: (row, index) => {
        return <>{row.played}</>;
      },
      style: { width: "100px", textAlign: "center" }
    },
    {
      label: "WINS",
      render: (row, index) => {
        return <>{row.wins}</>;
      },
      style: { width: "64px", textAlign: "center" }
    },
    {
      label: "LOSSES",
      render: (row, index) => {
        return <>{row.losses}</>;
      },
      style: { width: "64px", textAlign: "center" }
    },
    {
      label: "DRAWS",
      render: (row, index) => {
        return <>{row.draws}</>;
      },
      style: { width: "64px", textAlign: "center" }
    },
    {
      label: "GOAL DIFF.",
      render: (row, index) => {
        return <>{row.g_diff}</>;
      },
      style: { width: "100px", textAlign: "center" }
    },
    {
      label: "TOTAL POINTS",
      render: (row, index) => {
        return <>{row.points}</>;
      },
      style: { width: "92px", textAlign: "center" }
    }
  ];

  return (
    <div className={s.tableWrapper}>
      <div className={s.tableHeader}>
        {columns.map((column, index) => {
          return (
            <div className={s.tableHeaderCell} style={column.style} key={index}>
              {column.label}
            </div>
          );
        })}
      </div>
      {list &&
        list.length > 0 &&
        list.map((row, index) => {
          return (
            <div className={s.tableRow} key={index}>
              {columns.map((column, _index) => {
                return (
                  <div
                    className={s.tableCell}
                    style={column.style}
                    key={_index}
                  >
                    {column.render(row, index)}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
