import React from "react";
import Navbar from "../components/pages-components/Navbar";
import Helmet from "react-helmet";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Codetree</title>
        <meta
          name="description"
          content="Lightning fast online code playground with automatic npm module detection, built on top of Esbuild"
        />
      </Helmet>
      <Navbar />
      Home
    </div>
  );
};
