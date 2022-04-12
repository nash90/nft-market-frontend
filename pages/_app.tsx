import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NFTCollectionContextProvider from "../src/store/contexts/NFTCollectionContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <NFTCollectionContextProvider>
      <Component {...pageProps} />
    </NFTCollectionContextProvider>
  
  );

}

export default MyApp;
