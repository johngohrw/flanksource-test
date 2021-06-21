import React from "react";
import { logoMap } from "../../content/logomap";
import { format, formatDuration, intervalToDuration } from "date-fns";
import s from "./index.module.scss";

export default function MatchList({
  list,
  bgColor,
  title,
  hasScore,
  mainTeam,
  ...props
}) {
  return (
    <div className={s.container} style={{ background: bgColor }}>
      <div className={s.title}>{title}</div>
      <div className={s.list}>
        {list &&
          list.length > 0 &&
          list.map((game) => {
            const teams = Object.keys(game.score);
            const mainTeamIndex = teams.findIndex((o) => o === mainTeam);
            return (
              <div className={s.listItem}>
                <div className={s.versusSection}>
                  <div className={s.teamName}>{teams[mainTeamIndex]}</div>
                  <div className={s.logo}>
                    <img
                      alt={teams[mainTeamIndex]}
                      src={logoMap[teams[mainTeamIndex]]}
                    />
                  </div>
                  {hasScore ? (
                    <div className={s.score}>
                      {game.score[teams[mainTeamIndex]]}:
                      {game.score[teams[mainTeamIndex ^ 1]]}
                    </div>
                  ) : (
                    <div className={s.versus}>vs</div>
                  )}
                  <div className={s.logo}>
                    <img
                      alt={teams[mainTeamIndex ^ 1]}
                      src={logoMap[teams[mainTeamIndex ^ 1]]}
                    />
                  </div>
                  <div className={s.teamName}>{teams[mainTeamIndex ^ 1]}</div>
                </div>
                <div className={s.timeSection}>
                  <div className={s.date}>
                    {format(new Date(game.date), "h:mmaaa, do MMM yyyy")}
                  </div>
                  <div className={s.duration}>
                    {`${hasScore ? "" : "starts in "}${formatDuration(
                      intervalToDuration({
                        start: new Date(game.date),
                        end: new Date(process.env.CURRENT_DATE)
                      })
                    )}${hasScore ? " ago" : ""}`}
                  </div>
                </div>
              </div>
            );
          })}
        {list && list.length <= 0 && (
          <div className={s.emptyList}>none at the moment!</div>
        )}
      </div>
    </div>
  );
}
