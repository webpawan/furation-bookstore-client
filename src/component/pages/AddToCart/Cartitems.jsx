import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRefresh,
  setAmount,
  setRefresh,
} from "../../../redux/features/ProductSlice";
import { motion } from "framer-motion";
const Cartitem = ({ item }) => {
  const dispatch = useDispatch();
  const refresh = useSelector(getRefresh);
  const [data, setData] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setData(items);
  }, [localStorage.getItem("cartItems"), refresh]);

  const increaseBtn = (title) => {
    const updatedItems = data.map((item) => {
      if (item.title === title) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setData(updatedItems);
    dispatch(setRefresh());
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    calculateTotalQuantity(updatedItems);
  };
  const decreaseBtn = (title) => {
    const updatedItems = data.map((item) => {
      if (item.title === title) {
        const updatedQuantity = item.quantity - 1;

        if (updatedQuantity <= 0) {
          return null;
        }
        return {
          ...item,
          quantity: updatedQuantity,
        };
      }
      return item;
    });
    dispatch(setRefresh());
    const filteredItems = updatedItems.filter((item) => item !== null);
    setData(filteredItems);

    if (filteredItems.length === 0) {
      localStorage.removeItem("cartItems");
    } else {
      localStorage.setItem("cartItems", JSON.stringify(filteredItems));
    }

    calculateTotalQuantity(filteredItems);
  };
  const removeItem = (title) => {
    const updatedItems = data.filter((item) => item.title !== title);
    dispatch(setRefresh());
    setData(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    calculateTotalQuantity(updatedItems);
  };
  const calculateTotalQuantity = (items) => {
    const totalQuantity = items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    localStorage.setItem("quantity", totalQuantity);

    const totalAmount = items.reduce((total, item) => {
      const priceWithoutDollar = item.price.replace("$", "");
      const price = parseFloat(priceWithoutDollar);
      return total + item.quantity * price;
    }, 0);
    dispatch(setAmount(totalAmount));
  };

  useEffect(() => {
    calculateTotalQuantity(data);
  }, [data, refresh]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        className="my-3 col-12 d-flex justify-content-between align-items-center mx-auto "
      >
        <div className="col-sm-2 col-4 d-col-flex align-items-center mx-auto text-center">
          <div className="img_container--cart mx-auto ">
            <img
              src={item.image}
              style={{ width: "100px" }}
              className="img-container--cart"
            />
          </div>
          <div className="mx-2  ">
            <h5>{item.title}</h5>
          </div>
        </div>
        <div className="col-2 mx-auto text-center cart_hide">
          <div>
            <h5>{item.price}</h5>
          </div>
        </div>
        <div className="col-4 col-sm-2 mx-auto text-center ">
          <div className="counter d-flex justify-content-center my-4">
            <button
              className={`btn btn-outline-dark `}
              onClick={() => increaseBtn(item.title)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
            <h4 className="my-1 mx-3">{item.quantity}</h4>
            <button
              className={`btn btn-outline-dark `}
              onClick={() => decreaseBtn(item.title)}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>

        <div className="col-sm-2 col-4 mx-auto text-center">
          <button
            className="btn btn-outline-danger"
            onClick={() => removeItem(item.title)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Cartitem;
