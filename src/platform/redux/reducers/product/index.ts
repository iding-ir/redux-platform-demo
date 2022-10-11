import { PhotoBook, WallDecor } from "../../../types";
import {
  PlatformProductAction,
  PLATFORM_RESIZE_PRODUCT,
} from "../../actions/product";

const initialState: PhotoBook | WallDecor | null = null;

export const platformProductReducer = (
  state: PhotoBook | WallDecor | null = initialState,
  action: PlatformProductAction
): PhotoBook | WallDecor | null => {
  if (!state) {
    return state;
  }

  switch (action.type) {
    case PLATFORM_RESIZE_PRODUCT:
      return {
        ...state,
        size: { width: action.payload.width, height: action.payload.height },
      };

    default:
      return state;
  }
};
