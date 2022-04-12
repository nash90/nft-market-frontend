import React from "react";
import type { NextPage } from "next";
import PCLayout from "../src/components/layouts/PCLayout";
import { HeadTagMeta } from "../src/components/layouts/CommonHeadTag";


const Home: NextPage = () => {
  const meta: HeadTagMeta = {
    title: "Index Page"
  }

  return (
    <>
      <PCLayout meta={meta}>
        <h1>Hello World</h1>
      </PCLayout>
    </>
  );
};

export default Home;
