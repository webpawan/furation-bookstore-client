import React, { useEffect, useState } from "react";
import bg from "../Home/images/bookStore.jpg";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { productId } = useParams();
  const [book, setbook] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const fetchProductDetail = async () => {
    try {
      const { data } = await axios.get(
        `https://api.itbook.store/1.0/books/${productId}`
      );
      setbook(data);
    } catch (error) {}
  };

  const handleAddToCart = () => {
    const updateCartItem = [...cartItems];
  };

  useEffect(() => {
    fetchProductDetail();
    console.log(productId);
  }, [productId]);
  return (
    <>
      <div className="container mt-5 pt-4 vh-100">
        <div className=" py-5">
          <NavLink to="/store">continue Shopping</NavLink>
        </div>
        <div className="row mx-auto mt-3">
          <div className="col-10 col-md-4">
            <div className="img-container">
              <img src={book.image} className="img-fluid" alt="" srcset="" />
            </div>
          </div>
          <div className="col-10 col-md-8  d-flex justify-content-center flex-column align-items-left ">
            <h1 className="display-5 ">{book.title}</h1>
            <p className="d-flex">
              {book.year}{" "}
              <span className="mx-3"> | Rating - {book.rating} </span>{" "}
              <span> | Publisher - {book.publisher} </span>{" "}
              <span className="mx-3"> | Pages - {book.pages} </span>
            </p>
            <p className="lead ">{book.subtitle}</p>
            <h6>Auther Names- {book.authors}</h6>
            <h4>Language - {book.language}</h4>
            <p>{book.desc}</p>
            <h5 className="text-success">
              price - <span className="text-bold">{book.price}</span>{" "}
            </h5>
            <div className="mx-auto">
              <button
                className="btn btn-outline-primary mt-5"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
