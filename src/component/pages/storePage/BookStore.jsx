import React, { useEffect, useState } from "react";
import bg from "../Home/images/bookStore.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

const BookStore = () => {
  const [query, setQuery] = useState("website");
  const [selectedSortOption, setSelectedSortOption] = useState("a-z");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.itbook.store/1.0/search/${query}`
      );
      setLoading(false);

      setBooks(data.books);
      setQuery("");
    } catch (error) {
      console.log(error);
      alert("please search again or refresh the page");
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  const sortBooks = (option) => {
    const sortedBooks = [...books];
    if (option === "a-z") {
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "z-a") {
      sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
    } else if (option === "low") {
      sortedBooks.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
      });
    } else if (option === "high") {
      sortedBooks.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceB - priceA;
      });
    }
    setBooks(sortedBooks);
  };
  useEffect(() => {
    sortBooks(selectedSortOption);
  }, [selectedSortOption]);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className="container-fluid my-5 py-5 ">
        <div className="row mx-auto  ">
          <div className="col-11 col-md-4 mx-auto ">
            <form action="" onSubmit={handleSearch}>
              <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                  <button
                    type="submit"
                    className="input-group-text btn btn-outline-dark"
                    id="basic-addon1"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
                  value={selectedSortOption}
                  onChange={(e) => setSelectedSortOption(e.target.value)}
                >
                  <option value="low">low price</option>
                  <option value="high">high price</option>
                  <option value="a-z">A to Z</option>
                  <option value="z-a">Z to A</option>
                </select>
              </form>
            </div>
          </div>
          <div className="col-11 col-md-8 mx-auto">
            {loading ? (
              <h1 className="display-4 d-flex justify-content-center align-items-center">
                loading..
              </h1>
            ) : (
              <div className="row mx-auto">
                {books.length > 1 ? (
                  books.map((book) => {
                    const { title, subtitle, image, price, isbn13 } = book;
                    return (
                      <div
                        key={isbn13}
                        className="col-10 col-sm-4 col-md-3 mx-auto mb-5"
                      >
                        <div className="">
                          <img src={image} className=" img-fluid" alt="..." />
                          <div className="card-body">
                            <p>{price}</p>
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
                  <h1 className="text-dark">please search with currect name</h1>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookStore;
