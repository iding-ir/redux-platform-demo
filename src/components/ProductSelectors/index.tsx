import React from "react";
import { PRODUCTS } from "../../constants";
import { ProductSelector } from "../ProductSelector";
import Styles from "./styles.module.css";

export const ProductSelectors = () => {
  return (
    <nav className={Styles.nav}>
      {Object.values(PRODUCTS).map((product) => (
        <ProductSelector key={product} product={product} />
      ))}
    </nav>
  );
};
