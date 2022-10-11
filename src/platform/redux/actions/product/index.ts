import { Size } from "../../../types";

export const PLATFORM_RESIZE_PRODUCT = "PLATFORM_RESIZE_PRODUCT";

export interface PlatformProductAction {
  type: string;
  payload: Size;
}

export const resizeProduct = (payload: Size): PlatformProductAction => {
  return {
    type: PLATFORM_RESIZE_PRODUCT,
    payload,
  };
};
