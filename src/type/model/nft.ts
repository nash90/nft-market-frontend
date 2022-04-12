interface NFT {
  name: string;
  imageUrl: string;
  id: string;
}

interface NFTCollection {
  name: string;
  detail: string;
  imageUrl: string;
}

export type { NFT, NFTCollection };
