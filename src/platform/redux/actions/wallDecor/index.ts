export const PLATFORM_CHANGE_WALLDECOR_FRAME =
  "PLATFORM_CHANGE_WALLDECOR_FRAME";

export interface PlatformWallDecorAction<P> {
  type: string;
  payload: P;
}

export const changeWallDecorFrame = (
  payload: string
): PlatformWallDecorAction<string> => {
  return {
    type: PLATFORM_CHANGE_WALLDECOR_FRAME,
    payload,
  };
};
