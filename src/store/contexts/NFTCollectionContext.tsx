import React, { createContext, useContext, useReducer } from "react";
import { NFTCollectionStore } from "../../type/store/NFTStore";
import { NFTCollectionAction, NFTCollectionReducer } from "../reducers/NFTCollectionReducer";

const initialStore: NFTCollectionStore = {} as NFTCollectionStore;

interface NFTCollectionContextProps {
  nftCollectionStore: NFTCollectionStore;
  dispatch: React.Dispatch<NFTCollectionAction>;
}

interface NFTCollectionContextProviderProps {
  children: React.ReactNode;
}

// Initialize context to manage Common data
export const NFTCollectionContext = createContext({} as NFTCollectionContextProps);

export function useNFTCollectionContext() {
  return useContext(NFTCollectionContext);
}

const NFTCollectionContextProvider: React.FC<NFTCollectionContextProviderProps> = ({
  children,
}) => {
  const [nftCollectionStore, dispatch] = useReducer(NFTCollectionReducer, initialStore);

  const providerValue: NFTCollectionContextProps = {
    nftCollectionStore,
    dispatch,
  };

  return (
    <NFTCollectionContext.Provider value={providerValue}>
      {children}
    </NFTCollectionContext.Provider>
  );
};

export default NFTCollectionContextProvider;
