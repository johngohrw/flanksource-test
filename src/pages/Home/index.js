import React, { useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import s from "./index.module.scss";

import { loadData } from "../../utils/football";

import { data } from "../../content/data";

export default function Home() {
  useEffect(() => {
    // console.log(data);
    // data.forEach((o) => {
    //   console.log(o.score, o.date);
    // });
  }, []);

  return (
    <DefaultLayout>
      Homepage
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
    </DefaultLayout>
  );
}
