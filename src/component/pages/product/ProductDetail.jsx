import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getRefresh, setRefresh } from "../../../redux/features/ProductSlice";

const Product = () => {
  const { productId } = useParams();
  const [data, setdata] = useState("");
  const dispatch = useDispatch();
  const refresh = useSelector(getRefresh);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.itbook.store/1.0/books/${productId}`
      );
      setdata(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (book) => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingBook = existingItems.find(
      (item) => item.title === book.title
    );
    if (existingBook) {
      navigate("/addtocart");
    } else {
      book.quantity = 0;
      existingItems.push(book);
    }
    dispatch(setRefresh());
    localStorage.setItem("cartItems", JSON.stringify(existingItems));
    navigate("/addtocart");
  };
  useEffect(() => {
    fetchProductDetail();
  }, [productId]);
  return (
    <>
      <div className="container mt-5 pt-4 vh-100">
        <div className=" py-5">
          <NavLink to="/store">continue Shopping</NavLink>
        </div>
        {loading ? (
          <h1 className="display-4 d-flex justify-content-center align-items-center">
            loading...
          </h1>
        ) : (
          <div className="row mx-auto mt-3">
            <div className="col-10 col-md-4">
              <div className="img-container">
                <img src={data.image} className="img-fluid" alt="" srcSet="" />
              </div>
            </div>
            <div className="col-10 col-md-8  d-flex justify-content-center flex-column align-items-left ">
              <h1 className="display-5 ">{data.title}</h1>
              <p className="d-flex">
                {data.year}{" "}
                <span className="mx-3"> | Rating - {data.rating} </span>{" "}
                <span> | Publisher - {data.publisher} </span>{" "}
                <span className="mx-3"> | Pages - {data.pages} </span>
              </p>
              <p className="lead ">{data.subtitle}</p>
              <h6>Auther Names- {data.authors}</h6>
              <h4>Language - {data.language}</h4>
              <p>{data.desc}</p>
              <h5 className="text-success">
                price - <span className="text-bold">{data.price}</span>{" "}
              </h5>
              <div className="mx-auto">
                <button
                  className="btn btn-outline-primary mt-5"
                  onClick={() => handleAddToCart(data)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
