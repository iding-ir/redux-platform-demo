import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductName } from "../../redux/actions/productName";
import { setProduct } from "../../redux/actions/product";
import { ProductName } from "../../types";
import { defaultProducts } from "../../platform/data";
import Styles from "./styles.module.css";
import { IState } from "../../redux/reducers";

export const ProductSelector = ({ product }: { product: ProductName }) => {
  const dispatch = useDispatch();
  const productName = useSelector((state: IState) => state.productName);

  const onClick = () => {
    if (productName === product) {
      return;
    }

    dispatch(setProductName(product));
    dispatch(setProduct(defaultProducts[product]));
  };

  return (
    <button
      className={Styles.button}
      onClick={onClick}
    >{`Switch to ${product}`}</button>
  );
};
