import React from "react";
import { ProductSelectors } from "../ProductSelectors";
import { ProductName } from "../ProductName";
import { ProductView } from "../ProductView";
import Styles from "./styles.module.css";

export const App = () => {
  return (
    <main className={Styles.main}>
      <ProductName />

      <ProductSelectors />

      <ProductView />
    </main>
  );
};
