import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePhotoBookCover,
  changePhotoBookPages,
} from "../../platform/redux/actions/photoBook";
import { PhotoBook } from "../../platform/types";
import { IState } from "../../redux/reducers";
import Styles from "./styles.module.css";

export const PhotoBookSettings = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: IState<PhotoBook>) => state.product);
  const [coverTitle, setCoverTitle] = useState<string>(product.coverTitle);
  const [pageCount, setPageCount] = useState<number>(product.pageCount);

  const onSave = () => {
    dispatch(changePhotoBookCover(coverTitle));
    dispatch(changePhotoBookPages(pageCount));
  };

  const onCancel = () => {
    setCoverTitle(product.coverTitle);
    setPageCount(product.pageCount);
  };

  return (
    <div className={Styles.div}>
      <input
        type="text"
        value={coverTitle}
        onChange={(event) => setCoverTitle(event.target.value)}
      />

      <input
        type="number"
        value={pageCount}
        onChange={(event) => setPageCount(Number(event.target.value))}
      />

      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
