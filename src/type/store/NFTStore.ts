import { NFT, NFTCollection } from "../model/nft";

interface NFTCollectionStore {
  popularCollections: NFTCollection[];
  newCollections: NFTCollection[];
}

interface NFTStore {
  globalRecentSales: NFT[];
  higestRecentSales: NFT[];
}

export type { NFTCollectionStore, NFTStore };
