import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resizeProduct } from "../../platform/redux/actions/product";
import { PhotoBook, WallDecor } from "../../platform/types";
import { IState } from "../../redux/reducers";
import Styles from "./styles.module.css";

export const SizeSettings = () => {
  const dispatch = useDispatch();
  const size = useSelector(
    (state: IState<PhotoBook | WallDecor>) => state.product.size
  );
  const [width, setWidth] = useState<number>(size.width);
  const [height, setHeight] = useState<number>(size.height);

  const onSave = () => {
    dispatch(resizeProduct({ width, height }));
  };

  const onCancel = () => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <div className={Styles.div}>
      <input
        type="number"
        value={width}
        onChange={(event) => setWidth(Number(event.target.value))}
      />

      <input
        type="number"
        value={height}
        onChange={(event) => setHeight(Number(event.target.value))}
      />

      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
