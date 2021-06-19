import React from "react";
import s from "./index.module.scss";
import Branding from "../../components/Branding";

export default function DefaultLayout({ children, ...props }) {
  return (
    <div className={s.layoutWrapper}>
      <div className={s.layoutInner}>
        <div className={s.header}>
          <Branding />
        </div>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
}
