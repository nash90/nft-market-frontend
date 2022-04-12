import { CommonData, CommonStore } from "../../type/store/CommonStore";

export enum CommonAction {
  UPDATE_DATA = "UPDATE_DATA",
}

export interface CommonActionType {
  type: CommonAction;
  data: CommonData;
}

/**
 * Flux architecture for data flow where
 * Reducer maintains store days per action
 * @param {CommonStore} state
 * @param {CommonActionType} action
 * @returns
 */
export const CommonReducer = (state: CommonStore, action: CommonActionType) => {
  switch (action.type) {
    case CommonAction.UPDATE_DATA:
      return {
        ...state,
        data: { ...action.data },
      };

    default:
      return state;
  }
};
