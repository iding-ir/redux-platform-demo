import { ProductName } from "../../../types";
import {
  AppProductNameAction,
  APP_SET_PRODUCT_NAME,
} from "../../actions/productName";

const initialState: ProductName | null = null;

export const productNameReducer = (
  state: ProductName | null = initialState,
  action: AppProductNameAction
): ProductName | null => {
  switch (action.type) {
    case APP_SET_PRODUCT_NAME:
      return action.payload;

    default:
      return state;
  }
};
