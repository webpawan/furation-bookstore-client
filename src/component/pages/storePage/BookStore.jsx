import React, { useEffect, useState } from "react";
import bg from "../Home/images/bookStore.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

const BookStore = () => {
  const [query, setQuery] = useState("website");
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const { data } = await axios.get(
        `https://api.itbook.store/1.0/search/${query}`
      );
      console.log(data);
      setBooks(data.books);
    } catch (error) {}
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className="container-fluid my-5 py-5 ">
        <div className="row mx-auto  ">
          <div className="col-11 col-md-4 mx-auto ">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                  <button
                    className="input-group-text btn btn-outline-dark"
                    id="basic-addon1"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
                <input
                  type="text"
                  // value={text}
                  // onChange={updateFilterValue}
                  className="form-control"
                  placeholder="Search any languages , library , framework etc."
                  name="text"
                />
              </div>
            </form>

            <div className="company_filters my-5">
              <h5> Filters</h5>
              <form action="#">
                <select
                  name="company"
                  // onClick={updateFilterValue}
                >
                  <option
                    //  value={curElem} key={index}
                    value="A to Z"
                    name="company"
                  >
                    {/* {curElem} */}sort by name{" "}
                  </option>
                  <option
                    //  value={curElem} key={index}
                    value="A to Z"
                    name="company"
                  >
                    {/* {curElem} */}A to Z{" "}
                  </option>
                  <option
                    //  value={curElem} key={index}
                    value="A to Z"
                    name="company"
                  >
                    {/* {curElem} */}Z to A{" "}
                  </option>
                  {/* {companyData.map((curElem, index) => {
                    return (
                      <option value={curElem} key={index} name="company">
                        {curElem}
                      </option>
                    );
                  })} */}
                </select>
              </form>
            </div>
            <div class="range">
              <h3>Sort Books By Price</h3>
              <input type="range" class="form-range" id="customRange1" />
            </div>
          </div>
          <div className="col-11 col-md-8 mx-auto">
            <div className="row mx-auto">
              {books.length > 1 ? (
                books.map((book) => {
                  const { title, subtitle, image, price, isbn13 } = book;
                  return (
                    <div className="col-10 col-sm-4 col-md-3 mx-auto mb-5">
                      <div className="">
                        <img src={image} className=" img-fluid" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title my-2">{title}</h5>
                          <p className="card-text">{subtitle}</p>

                          <NavLink to={`/${isbn13}`}>
                            <button className="btn btn-outline-dark">
                              view details
                            </button>
                          </NavLink>
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
        </div>
      </div>
    </>
  );
};

export default BookStore;
