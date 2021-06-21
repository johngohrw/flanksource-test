import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { loadData } from "../../utils/football";
import { data } from "../../content/data";
import { logoMap } from "../../content/logomap";
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
        return <div className={s.tableRank}>{index + 1}</div>;
      },
      style: { width: "68px", justifyContent: "center", textAlign: "center" }
    },
    {
      label: "",
      render: (row, index) => {
        return (
          <div
            style={{ justifyContent: "center" }}
            className={[s.tableLogo, s.accentedCell].join(" ")}
          >
            <img alt={row.name} src={logoMap[row.name]} />
          </div>
        );
      },
      style: { width: "68px" }
    },
    {
      label: "CLUB",
      render: (row, index) => {
        return <div className={[s.accentedCell].join(" ")}>{row.name}</div>;
      },
      style: {
        width: "",
        flexGrow: 1,
        minWidth: "170px"
      }
    },
    {
      label: "GAMES PLAYED",
      render: (row, index) => {
        return (
          <div
            style={{ justifyContent: "center" }}
            className={[s.accentedCell].join(" ")}
          >
            {row.played}
          </div>
        );
      },
      style: { width: "100px", justifyContent: "center" }
    },
    {
      label: "WINS",
      render: (row, index) => {
        return (
          <div
            style={{ justifyContent: "center" }}
            className={[s.accentedCell, s.tableWins].join(" ")}
          >
            {row.wins}
          </div>
        );
      },
      style: { width: "64px", textAlign: "center" }
    },
    {
      label: "LOSSES",
      render: (row, index) => {
        return (
          <div
            style={{ width: "64px", justifyContent: "center" }}
            className={[s.accentedCell, s.tableLosses].join(" ")}
          >
            {row.losses}
          </div>
        );
      },
      style: { width: "64px", textAlign: "center" }
    },
    {
      label: "DRAWS",
      render: (row, index) => {
        return (
          <div
            style={{ width: "64px", justifyContent: "center" }}
            className={[s.accentedCell].join(" ")}
          >
            {row.draws}
          </div>
        );
      },
      style: { width: "64px", textAlign: "center" }
    },
    {
      label: "GOAL DIFF.",
      render: (row, index) => {
        return (
          <div
            style={{ width: "100px", justifyContent: "center" }}
            className={[s.accentedCell].join(" ")}
          >
            {row.g_diff}
          </div>
        );
      },
      style: { width: "100px", textAlign: "center" }
    },
    {
      label: "TOTAL POINTS",
      render: (row, index) => {
        return <div className={s.tablePoints}>{row.points}</div>;
      },
      style: { width: "92px", justifyContent: "center", textAlign: "center" }
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
