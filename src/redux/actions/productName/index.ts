import { ProductName } from "../../../types";

export const APP_SET_PRODUCT_NAME = "APP_SET_PRODUCT_NAME";

export interface AppProductNameAction {
  type: string;
  payload: ProductName;
}
export const setProductName = (payload: ProductName): AppProductNameAction => {
  return {
    type: APP_SET_PRODUCT_NAME,
    payload,
  };
};
