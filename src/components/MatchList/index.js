import React from "react";
import { logoMap } from "../../content/logomap";
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
        {list.map((game) => {
          const teams = Object.keys(game.score);
          const mainTeamIndex = teams.findIndex((o) => o === mainTeam);
          return (
            <div className={s.listItem}>
              <div className={s.versusSection}>
                <div className={s.teamName}>{teams[mainTeamIndex]}</div>
                {/* <div className={s.logo}>
              <img alt="Manchester United" src={logoMap["Manchester United"]} />
            </div> */}
                {hasScore ? (
                  <div className={s.score}>
                    {game.score[teams[mainTeamIndex]]}:
                    {game.score[teams[mainTeamIndex ^ 1]]}
                  </div>
                ) : (
                  <div className={s.versus}>vs</div>
                )}
                {/* <div className={s.logo}>
              <img alt="Arsenal" src={logoMap["Arsenal"]} />
            </div> */}
                <div className={s.teamName}>{teams[mainTeamIndex ^ 1]}</div>
              </div>
              <div className={s.timeSection}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
