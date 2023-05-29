import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cartitem from "./Cartitems";
import { useDispatch, useSelector } from "react-redux";
import {
  getAmount,
  getRefresh,
  setRefresh,
} from "../../../redux/features/ProductSlice";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddtoCard = () => {
  const [cart, setcart] = useState([]);
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);
  const refresh = useSelector(getRefresh);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [render, setRender] = useState("");
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
    if (!name || !email || !phone || !address) {
      return toast.error("Fill the all fields", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
    const books = JSON.parse(localStorage.getItem("cartItems"));
    try {
      const payload = {
        name,
        email,
        phone,
        address,
        books,
      };
      const { data } = await toast.promise(
        axios.post("/api/book/order", payload),
        {
          pending: "order is placing",
          success: "order place successfully",
          error: "please refresh the page or try again",
        }
      );
      console.log(data);
      setRender(true);
      localStorage.clear();
      localStorage.removeItem("quantity");
      dispatch(setRefresh());
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  useEffect(() => {
    setRefresh(false);
  }, [render]);

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
      <ToastContainer />
      <div
        className="modal fade"
        id="order"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Fill your details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control "
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                className="form-control mt-3"
                placeholder="phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger mt-3"
                data-bs-dismiss="modal"
              >
                Cancle
              </button>
              <button
                type="button"
                className="btn btn-outline-primary mt-3"
                data-bs-dismiss="modal"
                onClick={placeOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
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
          <motion.div layout>
            {cart.map((curElem, i) => {
              return <Cartitem key={i} item={curElem} />;
            })}
            <hr className="w-90 mx-atuo my-2" />
          </motion.div>

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
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#order"
              >
                Place order
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
