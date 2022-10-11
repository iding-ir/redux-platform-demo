import { WallDecor } from "../../../types";
import {
  PlatformWallDecorAction,
  PLATFORM_CHANGE_WALLDECOR_FRAME,
} from "../../actions/wallDecor";

const initialState: WallDecor | null = null;

export const platformWallDecorReducer = (
  state: WallDecor | null = initialState,
  action: PlatformWallDecorAction<any>
): WallDecor | null => {
  if (!state) {
    return state;
  }

  switch (action.type) {
    case PLATFORM_CHANGE_WALLDECOR_FRAME:
      return {
        ...state,
        fameType: action.payload,
      };

    default:
      return state;
  }
};
