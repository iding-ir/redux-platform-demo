import { FRAME_TYPES, PRODUCTS } from "../constants";

export type ProductName = keyof typeof PRODUCTS;
export type FrameType = keyof typeof FRAME_TYPES;
