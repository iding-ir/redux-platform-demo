import { combineReducers } from "redux";
import { productNameReducer } from "./productName";
import { productReducer } from "./product";
import { platformProductReducer } from "../../platform/redux/reducers/product";
import { composeReducers } from "../../utils/redux";
import { platformPhotoBookReducer } from "../../platform/redux/reducers/photobook";
import { platformWallDecorReducer } from "../../platform/redux/reducers/wallDecor";
import { ProductName } from "../../types";
import { PhotoBook, WallDecor } from "../../platform/types";

export interface IState<P = PhotoBook | WallDecor | null> {
  productName: ProductName | null;
  product: P;
}

const combinedReducers = combineReducers({
  productName: productNameReducer,
  product: composeReducers(
    productReducer,
    platformProductReducer,
    platformPhotoBookReducer,
    platformWallDecorReducer
  ),
});

export default combinedReducers;
