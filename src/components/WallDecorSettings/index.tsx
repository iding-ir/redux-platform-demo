import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FRAME_TYPES } from "../../constants";
import { changeWallDecorFrame } from "../../platform/redux/actions/wallDecor";
import { WallDecor } from "../../platform/types";
import { IState } from "../../redux/reducers";
import Styles from "./styles.module.css";

export const WallDecorSettings = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: IState<WallDecor>) => state.product);
  const [frameType, setFrameType] = useState<string>(product.frameType);

  const onSave = () => {
    dispatch(changeWallDecorFrame(frameType));
  };

  const onCancel = () => {
    setFrameType(product.frameType);
  };

  const renderSelect = () => {
    return Object.values(FRAME_TYPES).map((frameType) => (
      <option>{frameType}</option>
    ));
  };

  return (
    <div className={Styles.div}>
      <select
        value={frameType}
        onChange={(event) => setFrameType(event.target.value)}
      >
        {renderSelect()}
      </select>

      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
