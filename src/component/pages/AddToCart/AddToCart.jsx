import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cartitem from "./Cartitems";
import { useDispatch, useSelector } from "react-redux";
import {
  getAmount,
  getQuantity,
  getRefresh,
  setQuantity,
  setRefresh,
} from "../../../redux/features/ProductSlice";

const AddtoCard = () => {
  const [cart, setcart] = useState([]);
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);
  const refresh = useSelector(getRefresh);
  const clearCart = () => {
    localStorage.removeItem("quantity");

    localStorage.removeItem("cartItems");
    dispatch(setRefresh());
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setcart(items);
  }, [refresh]);

  const placeOrder = async () => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    dispatch(setRefresh());
  };

  if (cart.length === 0) {
    return (
      <>
        <div className=" vh-100    d-flex flex-column justify-content-center align-items-center">
          <h1
            className={`text-capitalize heading underline d-inline  text-primary`}
          >
            Cart is Empty
          </h1>
          <div className="d-flex justify-content-center mt-5 ">
            <NavLink to="/store">
              <button className="btn btn-outline-dark text-capitalize  ">
                contine shopping
              </button>
            </NavLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container py-5"></div>
      <div className="container ">
        <div className="row mx-auto py-3 bg-light">
          <div className="col-12 d-flex justify-content-between align-items-center mx-auto ">
            <div className="col-sm-2 col-4 text-center mx-auto">
              <h5 className="heading-1 text-capitalize size">item</h5>
            </div>
            <div className="col-2 text-center mx-auto cart_hide">
              <h5 className="heading-1 text-capitalize size ">price</h5>
            </div>
            <div className="col-sm-2 col-4 text-center mx-auto">
              <h5 className="heading-1 text-capitalize size">quantity</h5>
            </div>

            <div className="col-sm-2 col-4 text-center mx-auto">
              <h5 className="heading-1 text-capitalize size">remove</h5>
            </div>
          </div>
          <hr />
          <div>
            {cart.map((curElem, i) => {
              return <Cartitem key={i} item={curElem} />;
            })}
            <hr className="w-90 mx-atuo my-2" />
          </div>

          <div className="col-12 d-sm-flex justify-content-between align-items-center mt-5 mx-auto text-center ">
            <NavLink to="/store">
              <button className="btn btn-outline-dark text-capitalize mx-2 my-2 ">
                contine shopping
              </button>
            </NavLink>
            <button
              className="btn btn-outline-danger text-capitalize mx-2"
              onClick={clearCart}
            >
              clear cart
            </button>
          </div>
        </div>
        <div className="row my-3 ">
          <div className="col d-sm-flex justify-content-end ">
            <div className="cart_box bg-light p-4">
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="lead text-capitalize me-5">total order Price</h6>{" "}
                <h6 className="lead">&#x20B9; {amount}</h6>{" "}
              </div>

              <button
                className="btn btn-outline-success mt-5"
                onClick={placeOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------- */}
    </>
  );
};

export default AddtoCard;
