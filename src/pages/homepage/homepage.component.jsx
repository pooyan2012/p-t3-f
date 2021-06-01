import React from "react";
import HomeGrid from "../../core/HomeGrid";
import Navbar from "../../core/Navbar";
import HomePosts from "../../core/HomePosts";
import Footer from "../../core/Footer";

import './homepage.styles.scss'

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