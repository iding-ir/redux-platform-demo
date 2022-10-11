import { FrameType } from "../../types";

export type Size = {
  width: number;
  height: number;
};

export type BasicProduct = {
  id: string;
  size: Size;
};

export type PhotoBook = BasicProduct & {
  pageCount: number;
  coverTitle: string;
};

export type WallDecor = BasicProduct & {
  frameType: FrameType;
};
