import { FrameType } from "../../types";

export interface Size {
  width: number;
  height: number;
}

export interface PhotoBook {
  id: string;
  size: Size;
  pageCount: number;
  coverTitle: string;
}

export interface WallDecor {
  id: string;
  size: Size;
  fameType: FrameType;
}
