import React from "react";
import HomeGrid from "./HomeGrid";
import Navbar from "./Navbar";
import HomePosts from "./HomePosts";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeGrid />
      <HomePosts />
      <Footer />
    </>
  );
};

export default Home;
