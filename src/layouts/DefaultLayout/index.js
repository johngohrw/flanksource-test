import React from "react";
import s from "./index.module.scss";

export default function DefaultLayout({ children, ...props }) {
  return (
    <div className={s.layoutWrapper}>
      <div className={s.header}>
        <div className={s.branding}>Branding</div>
      </div>
      <div className={s.content}>{children}</div>
    </div>
  );
}
