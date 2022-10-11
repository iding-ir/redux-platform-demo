import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../redux/reducers";
import Styles from "./styles.module.css";

export const ProductName = () => {
  const productName = useSelector((state: IState) => state.productName);

  return (
    <header className={Styles.header}>
      {productName || "There is no product name"}
    </header>
  );
};
