export const PLATFORM_CHANGE_PHOTOBOOK_COVER =
  "PLATFORM_CHANGE_PHOTOBOOK_COVER";
export const PLATFORM_CHANGE_PHOTOBOOK_PAGES =
  "PLATFORM_CHANGE_PHOTOBOOK_PAGES";

export interface PlatformPhotoBookAction<P> {
  type: string;
  payload: P;
}

export const changePhotoBookCover = (
  payload: string
): PlatformPhotoBookAction<string> => {
  return {
    type: PLATFORM_CHANGE_PHOTOBOOK_COVER,
    payload,
  };
};

export const changePhotoBookPages = (
  payload: number
): PlatformPhotoBookAction<number> => {
  return {
    type: PLATFORM_CHANGE_PHOTOBOOK_PAGES,
    payload,
  };
};
