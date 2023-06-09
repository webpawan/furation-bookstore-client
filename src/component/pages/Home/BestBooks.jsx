import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const BookStore = ({ query }) => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.itbook.store/1.0/search/${query}`
    );
    setData(data.books);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container-fluid store text-white text-white p-5"
      >
        <div className="row ml-auto overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mx-auto mt-5"
          >
            Best {query} Books
          </motion.h1>
        </div>

        <div className="row mx-auto card-containers my-5">
          {data ? (
            data.slice(0, 8).map((card, i) => {
              const { image, title, subtitle, isbn13 } = card;
              return (
                <motion.div
                  className="col-10 col-sm-4 col-md-3 mx-auto mb-2"
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.3, duration: 0.8 }}
                >
                  <div className="">
                    <img src={image} className=" img-fluid" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title my-2">{title}</h5>
                      <p className="card-text">{subtitle}</p>

                      <NavLink to={`/${isbn13}`}>
                        <button className="btn btn-outline-light">
                          view details
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default BookStore;
