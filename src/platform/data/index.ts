import { FRAME_TYPES, PRODUCTS } from "../../constants";
import { PhotoBook, WallDecor } from "../types";

const defaultPhotoBook: PhotoBook = {
  id: "1",
  size: { width: 100, height: 100 },
  coverTitle: "Hi",
  pageCount: 10,
};

const defaultWallDecor: WallDecor = {
  id: "1",
  size: { width: 80, height: 200 },
  fameType: FRAME_TYPES.SMALL,
};

export const defaultProducts = {
  [PRODUCTS.PHOTOBOOK]: defaultPhotoBook,
  [PRODUCTS.WALLDECOR]: defaultWallDecor,
};
