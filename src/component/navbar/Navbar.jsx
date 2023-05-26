import React from "react";
import "./style/style.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow  navbar-light bg-light fixed-top  ">
        <div className="container-fluid">
          <h1 className="navbar">BookStore</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse px-5 mx-auto "
            id="navbarNav"
          >
            <ul className="navbar-nav  mx-auto  py-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/store">
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/addtocart">
                  cart
                </NavLink>
              </li>
            </ul>

            <h5 className="d-flex  ">
              <i className="fa-regular fa-circle-user"></i>
            </h5>
          </div>
        </div>
      </nav>
      <motion.div
        className="cart_icon shadow"
        initial={{ opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}
        transition={{ delay: 3, duration: 1, type: "spring", stiffness: 100 }}
      >
        <lord-icon
          src="https://cdn.lordicon.com/dnoiydox.json"
          trigger="hover"
          colors="primary:#121331,secondary:#242424"
          style={{ width: "30px" }}
        ></lord-icon>
        {/* <p>{total_item}</p> */}
        <p>5</p>
      </motion.div>
    </>
  );
};

export default Navbar;
