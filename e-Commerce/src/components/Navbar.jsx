import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { items } from "./Data";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  //to navigate into the other search part
  const navigate = useNavigate();
  //using usewState hook for implementing search technique
  const [searchValue, setSearchValue] = useState("");

  //funtion for handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
  };

  //this is for the filter ,function for filtering
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-COM{" "}
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search in  E_COM.in"
            />
          </form>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <GiShoppingCart style={{ fontSize: "2rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="item">filters:</div>
            <div
              onClick={() => filterByCategory("Paper Products")}
              className="item">
              Paper Products
            </div>
            <div
              onClick={() => filterByCategory("Desktop Instruments")}
              className="item">
              Desktop Instruments
            </div>
            <div
              onClick={() => filterByCategory("Drawing Instruments")}
              className="item">
              Drawing Instruments
            </div>
            <div
              onClick={() => filterByCategory("Desktop Organisers")}
              className="item">
              Desktop Organisers
            </div>
            <div
              onClick={() => filterByCategory("Consumables")}
              className="item">
              Consumables
            </div>
            <div
              onClick={() => filterByCategory("Filling and Storage")}
              className="item">
              Filling and Storage
            </div>
            <div
              onClick={() => filterByCategory("Writing Accessories")}
              className="item">
              Writing Accessories
            </div>
            <div onClick={() => filterByCategory("Books")} className="item">
              Books
            </div>
            <div
              onClick={() => filterByCategory("Art and Craft")}
              className="item">
              Art and Craft
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
