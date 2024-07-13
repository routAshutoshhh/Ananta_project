/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();

  const { setFilteredData, products, logout, isAuthenticated, cart } =
    useContext(AppContext);
  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() == cat.toLowerCase()
      )
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm(" ");
  };
  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar">
          <Link
            to={"/"}
            className="left"
            style={{ textDecoration: "none", color: "white" }}>
            <h3>k4A E-com</h3>
          </Link>
          <form className="search_bar" onSubmit={submitHandler}>
            <span className="material-symbols-outlined"></span>{" "}
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products in k4A..."
            />
          </form>
          <div className="right">
            {isAuthenticated && (
              <>
                <Link
                  to={"/cart"}
                  type="button"
                  className="btn btn-primary position-relative mx-3">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>

                  {cart?.items?.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart?.items?.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  )}
                </Link>

                <Link to={"/profile"} className="btn btn-info mx-3">
                  profile
                </Link>
                <button
                  className="btn btn-danger mx-3"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}>
                  logout
                </button>
              </>
            )}

            {!isAuthenticated && (
              <>
                <Link to={"/login"} className="btn btn-secondary mx-3">
                  login
                </Link>
                <Link to={"/register"} className="btn btn-info mx-3">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>

        {location.pathname == "/" && (
          <div className="sub_bar">
            <div
              className="items"
              onClick={() => filterbyCategory("Paper Products")}>
              Paper Products
            </div>
            <div
              className="items"
              onClick={() => filterbyCategory("Desktop Instruments")}>
              Desktop Instruments
            </div>
            <div
              className="items"
              onClick={() => filterbyCategory("Drawing Instruments")}>
              Drawing Instruments
            </div>
            <div
              className="items"
              onClick={() => filterbyCategory("Desktop Organisers")}>
              Desktop Organiser
            </div>
            <div
              className="items"
              onClick={() => filterbyCategory("Consumables")}>
              Consumables
            </div>
            <div
              className="items"
              onClick={() => filterbyCategory("Filling and Storage")}>
              Filling and Storage
            </div>
            <div
              className="items"
              onClick={() => filterbyCategory("Writing Accessories")}>
              Writing Accessories
            </div>
            <div className="items" onClick={() => filterbyCategory("Books")}>
              Books
            </div>
            <div
              className="items"
              onClick={() => filterbyCategory("Art and Craft")}>
              Art and Craft
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
