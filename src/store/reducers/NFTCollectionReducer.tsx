import { NFTCollection } from "../../type/model/nft";
import { NFTCollectionStore } from "../../type/store/NFTStore";

export enum NFTCollectionActionType {
  UPDATE_POPULAR_COLLECTION = "UPDATE_POPULAR_COLLECTION",
}

export interface NFTCollectionAction {
  type: NFTCollectionActionType;
  data: NFTCollection[];
}

export const NFTCollectionReducer = (state: NFTCollectionStore, action: NFTCollectionAction) => {
  switch (action.type) {
    case NFTCollectionActionType.UPDATE_POPULAR_COLLECTION:
      return {
        ...state,
        popularCollections: [...action.data],
      };

    default:
      return state;
  }
};
