import React, { useEffect, useState } from "react";
import bg from "./images/bookStore.jpg";
import axios from "axios";

const BookStore = ({ query }) => {
  const [data, setData] = useState("");
  console.log(query);
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
      <div className="container-fluid store text-white text-white p-5">
        <div className="row ml-auto">
          <h1 className="text-center mx-auto mt-5">Best {query} Book</h1>
        </div>
        {/* <div className="row mx-auto ">
          <div className="col-md-12  mt-5 text-center">
            <input
              type="text"
              name=""
              id=""
              className="search"
              placeholder="search it book by leanguage"
            />
            <input
              type="text"
              name=""
              placeholder="sort"
              className="sort"
              id=""
            />
          </div>
        </div> */}
        <div className="row mx-auto card-containers my-5">
          {data ? (
            data.slice(0, 8).map((card, i) => {
              console.log(card);
              return (
                <div className="col-10 col-sm-4 col-md-3 mx-auto mb-2" key={i}>
                  <div className="">
                    <img src={card.image} className=" img-fluid" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title my-2">{card.title}</h5>
                      <p className="card-text">{card.subtitle}</p>
                      <button className="btn btn-outline-light">
                        view details
                      </button>
                      <button className="btn btn-outline-secondary mx-3">
                        Add to card
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookStore;
