import React, { useState, useEffect, Fragment } from "react";
import HomeGrid from "./HomeGrid";
import Navbar from "./Navbar";
import HomePosts from "./HomePosts";
import Footer from "./Footer";

const Home = () => {
  /*const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsSortedBy = (sortBy) => {
    getProducts(sortBy).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        if (sortBy == "sold") {
          setProductsBySell(data);
        } else {
          setProductsByArrival(data);
        }
      }
    });
  };

  useEffect(() => {
    loadProductsSortedBy("createdAt");
    loadProductsSortedBy("sold");
  }, []);*/

  return (
    <>
      <Navbar />
      <HomeGrid />
      <HomePosts />
      <Footer />
    </>

    /*<Layout
      title="Home Page"
      description="Node React E-commerce App"
      className="container-fluid"
    >
      <Search />
      <h2 className="mb-4">New arrivals</h2>
      <div className="row">
        {productsByArrival.map((product, i) => {
          return (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          );
        })}
      </div>
      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => {
          return (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </Layout>*/
  );
};

export default Home;
