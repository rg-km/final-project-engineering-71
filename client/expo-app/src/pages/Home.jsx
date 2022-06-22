import React from "react";
import Hero from "../section/Hero";
import LatestProject from "../section/LatestProject";
import PopularProject from "../section/PopularProject";

function Home() {
  return (
    <>
      <Hero />
      <PopularProject />
      <LatestProject />
    </>
  );
}

export default Home;
