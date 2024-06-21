import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
  // function to add element in the project

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);

    toast.success("Item Added into the Cart!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="container my-5">
        <div className="row">
          {items.map((prod) => {
            return (
              <>
                <div key={prod.id} className="col-lg-4 my-3 text-center ">
                  <div className="card" style={{ width: "18rem" }}>
                    <Link
                      to={`/product/${prod.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <img
                        src={prod.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{prod.title}</h5>
                      <p className="card-text">{prod.description}</p>
                      <button className="btn btn-primary">
                        ₹ {prod.price}
                      </button>
                      {/* here is the add tom cart functioanlity is added hence when to add to cart is clicked then here we call the function addToCart */}
                      <button
                        onClick={() =>
                          addToCart(
                            prod.id,
                            prod.price,
                            prod.title,
                            prod.description,
                            prod.imgSrc
                          )
                        }
                        className="btn btn-warning mx-3">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
