import React from "react";
import s from "./index.module.scss";
import Branding from "../../components/Branding";

export default function DefaultLayout({ children, ...props }) {
  return (
    <div className={s.layoutWrapper}>
      <div className={s.header}>
        <Branding />
        <nav>
          <a href="/html/">HTML</a> |<a href="/css/">CSS</a> |
          <a href="/js/">JavaScript</a> |<a href="/python/">Python</a>
        </nav>
      </div>
      <div className={s.content}>{children}</div>
    </div>
  );
}
