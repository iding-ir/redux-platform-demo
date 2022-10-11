import { PhotoBook, WallDecor } from "../../../platform/types";

export const APP_SET_PRODUCT = "APP_SET_PRODUCT";

export interface AppProductAction {
  type: string;
  payload: PhotoBook | WallDecor;
}

export const setProduct = (
  payload: PhotoBook | WallDecor
): AppProductAction => {
  return {
    type: APP_SET_PRODUCT,
    payload,
  };
};
