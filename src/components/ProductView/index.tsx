import React from "react";
import { useSelector } from "react-redux";
import { PRODUCTS } from "../../constants";
import { IState } from "../../redux/reducers";
import { PhotoBookApp } from "../PhotoBookApp";
import { WallDecorApp } from "../WallDecorApp";
import Styles from "./styles.module.css";

export const ProductView = () => {
  const productName = useSelector((state: IState) => state.productName);
  const product = useSelector((state: IState) => state.product);

  switch (product && productName) {
    case PRODUCTS.PHOTOBOOK:
      return <PhotoBookApp />;

    case PRODUCTS.WALLDECOR:
      return <WallDecorApp />;

    default:
      return <section>There is no product</section>;
  }
};
