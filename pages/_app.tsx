import React from "react";
import "../styles/globals.css";
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from "next/app";
import NFTCollectionContextProvider from "../src/store/contexts/NFTCollectionContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider>
      <NFTCollectionContextProvider>
        <Component {...pageProps} />
      </NFTCollectionContextProvider>
    </NextUIProvider>
  
  );

}

export default MyApp;
