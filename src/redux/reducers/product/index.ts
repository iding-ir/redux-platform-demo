import { PhotoBook, WallDecor } from "../../../platform/types";
import { AppProductAction, APP_SET_PRODUCT } from "../../actions/product";

const initialState: PhotoBook | WallDecor | null = null;

export const productReducer = (
  state: PhotoBook | WallDecor | null = initialState,
  action: AppProductAction
): PhotoBook | WallDecor | null => {
  switch (action.type) {
    case APP_SET_PRODUCT:
      return action.payload;

    default:
      return state;
  }
};
