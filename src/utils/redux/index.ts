import { Action } from "redux";

export const composeReducers = <S>(...reducers: any) => {
  const result = (prevState: S, action: Action): S =>
    reducers.reduceRight(
      (nextState: any, reducer: (arg0: any, arg1: Action<any>) => any) =>
        reducer(nextState, action),
      prevState
    );

  return result;
};
