import { NFTCollection } from "../../type/model/nft";

interface NFTCollectionData {
  title: string,
  detail?: string,
  imageUrl?: string,
}

interface NFTCollectionsResponse {
  status: number;
  data: NFTCollectionData[];
}
/**
 * Function to mock data inplace of api call
 * returns data and request status from api
 */
const generatePopularCollectionMockData = () => {
  const mock: NFTCollectionsResponse = {
    status: 1,
    data: [
      {
        title: "The Chimpions",
        detail: "The Chimpions",
        imageUrl: "https://arweave.net/V3-LjkLQsbzOL7wTGr9VpMGdsBHcFn_7zbRadrKWv04"
      },
      {
        title: "Tamashi Soul",
        detail: "",
        imageUrl: "https://arweave.net/f53h4CUiqA4Dpw_aJEO8seHKavBGhuxs-f3YHMSqdik"
      },
      {
        title: "The Pumas",
        detail: "",
        imageUrl:"https://arweave.net/xZg4G7kk8ge2-NKp-iyST6I920XNm_ety-X8BAs9CeA"
      },
      {
        title: "SoLautos",
        detail: "",
        imageUrl:"https://arweave.net/pYauC9g7pJcn7MHnMF-7flAqafcnb_z8PvIeZdOICEc",
      },
    ],
  };

  return mock;
};


const getPopularCollections = () => {
  // Generate a mock data for Demo
  const apiRes = generatePopularCollectionMockData();
  const popularCollections = apiRes.data.map((item) => {
    const collection: NFTCollection = {
      name: item.title,
      detail: item.detail || "",
      imageUrl: item.imageUrl || "",
    }
    return collection
  });

  return popularCollections
};

export { getPopularCollections };
