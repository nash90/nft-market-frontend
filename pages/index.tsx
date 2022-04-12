import React, { useEffect } from "react";
import type { NextPage } from "next";
import PCLayout from "../src/components/layouts/PCLayout";
import { Box, Container, Grid, Paper, Toolbar } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import { HeadTagMeta } from "../src/components/layouts/CommonHeadTag";
import { useNFTCollectionContext } from "../src/store/contexts/NFTCollectionContext";
import CardList from "../src/components/card/CardList";
import { getPopularCollections } from "../src/store/api/NFTCollectionApi";
import { NFTCollectionActionType } from "../src/store/reducers/NFTCollectionReducer";

const Home: NextPage = () => {
  const meta: HeadTagMeta = {
    title: "Index Page",
  };

  const { nftCollectionStore, dispatch } = useNFTCollectionContext();
  const popularCollections = nftCollectionStore.popularCollections;
  console.log("popular collection store state", popularCollections)

  useEffect(() => {
    const popular = getPopularCollections();
    console.log("useEffect data", popular)
    // If api call is success set data
    if (popular.length > 1) {
      dispatch({
        type: NFTCollectionActionType.UPDATE_POPULAR_COLLECTION,
        data: popular,
      });
    } else {
      // Display Error Message if api call failed or returned error
    }
  }, []);

  return (
    <>
      <PCLayout meta={meta}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  Space 1
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  Space 2
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  {
                    popularCollections && popularCollections.length && (
                    <CardList 
                      sectionTitle="Popular Collection"
                      collections={popularCollections}
                    />
                    ) 
                  }

                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </PCLayout>
    </>
  );
};

export default Home;
