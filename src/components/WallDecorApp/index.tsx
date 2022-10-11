import React from "react";
import { SizeSettings } from "../SizeSettings";
import { WallDecorSettings } from "../WallDecorSettings";
import Styles from "./styles.module.css";

export const WallDecorApp = () => {
  return (
    <section className={Styles.section}>
      <SizeSettings />

      <WallDecorSettings />
    </section>
  );
};
