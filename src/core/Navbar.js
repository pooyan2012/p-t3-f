import React from "react";
import NavCats from "./NavCats";
import SearchModal from "./SearchModal";
import UserModal from "./UserModal";

const Navbar = () => {
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
    </Layout>
    
    <img
              src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ffea0198d5cbf052c0adc05_search-ico.svg"
              loading="lazy"
              alt=""
              className="search-icon"
            />

            <img
              src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ffea0190775a5438bf5fea3_user-ico.svg"
              loading="lazy"
              alt=""
              className="user-icon"
            />
    */

    /**************** >>>> NAVBAR start <<<< *****************/
    <div className="navbar-sec">
      <div className="nav-parent-div">
        <div className="nav-child">
          <div className="nav-div-icons">
            <UserModal className="user-icon" />
            <SearchModal className="search-icon" />
          </div>

          <NavCats />

          <div className="nav-div-logo">
            <img
              src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ff56ffeffe0b07415c6f71a_T3CH.png"
              loading="lazy"
              width="99"
              alt=""
              className="logo"
            />
          </div>
        </div>
      </div>
    </div>
    /**************** >>>> NAVBAR end <<<< *****************/
  );
};

export default Navbar;
