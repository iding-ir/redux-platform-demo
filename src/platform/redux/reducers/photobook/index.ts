import { PhotoBook } from "../../../types";
import {
  PlatformPhotoBookAction,
  PLATFORM_CHANGE_PHOTOBOOK_COVER,
  PLATFORM_CHANGE_PHOTOBOOK_PAGES,
} from "../../actions/photoBook";

const initialState: PhotoBook | null = null;

export const platformPhotoBookReducer = (
  state: PhotoBook | null = initialState,
  action: PlatformPhotoBookAction<any>
): PhotoBook | null => {
  if (!state) {
    return state;
  }

  switch (action.type) {
    case PLATFORM_CHANGE_PHOTOBOOK_COVER:
      return {
        ...state,
        coverTitle: action.payload,
      };

    case PLATFORM_CHANGE_PHOTOBOOK_PAGES:
      return {
        ...state,
        pageCount: action.payload,
      };

    default:
      return state;
  }
};
