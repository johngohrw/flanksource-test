import React from "react";
import { useHistory } from "react-router";
import { logoMap } from "../../content/logomap";
import s from "./index.module.scss";

export default function Leaderboards({ list, ...props }) {
  const history = useHistory();

  const columns = [
    {
      label: "RANK",
      render: (row, index) => {
        return <div className={s.tableRank}>{index + 1}</div>;
      },
      columnStyle: {
        width: "68px",
        justifyContent: "center",
        textAlign: "center"
      }
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
      columnStyle: { width: "68px" }
    },
    {
      label: "CLUB",
      render: (row, index) => {
        return <div className={[s.accentedCell].join(" ")}>{row.name}</div>;
      },
      columnStyle: {
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
            style={{ justifyContent: "center", fontWeight: 600 }}
            className={[s.accentedCell].join(" ")}
          >
            {row.played}
          </div>
        );
      },
      columnStyle: { width: "100px", justifyContent: "center" }
    },
    {
      label: "WINS",
      render: (row, index) => {
        return (
          <div
            style={{ justifyContent: "center", fontWeight: 600 }}
            className={[s.accentedCell, s.tableWins].join(" ")}
          >
            {row.wins}
          </div>
        );
      },
      columnStyle: { width: "64px", textAlign: "center" }
    },
    {
      label: "LOSSES",
      render: (row, index) => {
        return (
          <div
            style={{ width: "64px", justifyContent: "center", fontWeight: 600 }}
            className={[s.accentedCell, s.tableLosses].join(" ")}
          >
            {row.losses}
          </div>
        );
      },
      columnStyle: { width: "64px", textAlign: "center" }
    },
    {
      label: "DRAWS",
      render: (row, index) => {
        return (
          <div
            style={{ width: "64px", justifyContent: "center", fontWeight: 600 }}
            className={[s.accentedCell].join(" ")}
          >
            {row.draws}
          </div>
        );
      },
      columnStyle: { width: "64px", textAlign: "center" }
    },
    {
      label: "GOAL DIFF.",
      render: (row, index) => {
        return (
          <div
            style={{
              width: "100px",
              justifyContent: "center",
              fontWeight: 600
            }}
            className={[s.accentedCell].join(" ")}
          >
            {row.g_diff}
          </div>
        );
      },
      columnStyle: { width: "100px", textAlign: "center" }
    },
    {
      label: "TOTAL POINTS",
      render: (row, index) => {
        return <div className={s.tablePoints}>{row.points}</div>;
      },
      columnStyle: {
        width: "92px",
        justifyContent: "center",
        textAlign: "center"
      }
    }
  ];

  return (
    <div className={s.tableWrapper}>
      <div className={s.tableHeader}>
        {columns.map((column, index) => {
          return (
            <div
              className={s.tableHeaderCell}
              style={column.columnStyle}
              key={index}
            >
              {column.label}
            </div>
          );
        })}
      </div>
      {list &&
        list.length > 0 &&
        list.map((row, index) => {
          return (
            <div
              className={s.tableRow}
              key={index}
              onClick={() => {
                history.push(`/team/${row.name}`);
              }}
            >
              {columns.map((column, _index) => {
                return (
                  <div
                    className={s.tableCell}
                    style={column.columnStyle}
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
