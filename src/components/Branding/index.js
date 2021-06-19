import React from "react";
import s from "./index.module.scss";

export default function Branding() {
  return (
    <div className={s.branding}>
      <div className={s.brandingInner}>
        <div className={s.brandingText}>FÚTBOL NEWS</div>
        <div className={s.brandingStreak} />
      </div>
    </div>
  );
}
