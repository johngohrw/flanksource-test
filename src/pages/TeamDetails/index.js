import React from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
// import s from "./index.module.scss";

export default function TeamDetails() {
  const { name } = useParams();
  return <DefaultLayout>TeamDetails for team {name}</DefaultLayout>;
}
