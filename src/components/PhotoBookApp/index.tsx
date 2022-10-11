import React from "react";
import { SizeSettings } from "../SizeSettings";
import { PhotoBookSettings } from "../PhotoBookSettings";
import Styles from "./styles.module.css";

export const PhotoBookApp = () => {
  return (
    <section className={Styles.section}>
      <SizeSettings />

      <PhotoBookSettings />
    </section>
  );
};
