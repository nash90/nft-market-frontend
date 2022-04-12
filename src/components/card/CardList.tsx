import React from "react";
import List from "@mui/material/List";
import { NFTCollection } from "../../type/model/nft";
import CustomCard from "./CustomCard";
import { Container, Grid } from "@mui/material";


interface CardListProps {
  sectionTitle: string,
  collections: NFTCollection[];
}

const CardList: React.FC<CardListProps> = (props: CardListProps) => {
  const { sectionTitle, collections } = props;

  return (
    <>
      <Container id="card-list-container" sx={{ py: 8 }} maxWidth="md">
        <h1>{sectionTitle}</h1>
        <Grid id="card-list-grid" container spacing={4}>
          {collections.length && collections.map((collection, idx) => {
            return (
              <CustomCard
                key={`nft-collection-${idx}`}
                collectionTitle={collection.name}
                collectionDetail={collection.detail}
                collectionImg={collection.imageUrl}
                collectionUrl={"#"}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default CardList;
