import { NFTCollection } from "../../type/model/nft";
import { NFTCollectionAction, NFTCollectionActionType } from "../reducers/NFTCollectionReducer";

const setPopularNFTCollections = (
  dispatch: React.Dispatch<NFTCollectionAction>,
  data: NFTCollection[]
) => {
  dispatch({
    type: NFTCollectionActionType.UPDATE_POPULAR_COLLECTION,
    data: [ ...data ],
  });
};

export { setPopularNFTCollections };
