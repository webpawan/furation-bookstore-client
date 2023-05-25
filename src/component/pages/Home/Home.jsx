import React from "react";
import "./style/style.css";
import BookStore from "./BestBooks";
const Home = () => {
  return (
    <>
      <div className="container-fluid bg-dark Home">
        <div
          className="row
        home-container "
        >
          <h1 className="display-2  text-light  d-flex justify-content-center">
            THE BIGGEST{" "}
            <span className="text-secondary bg-light px-3 display-1">
              IT BOOKSTORE
            </span>{" "}
          </h1>
          <p className="text-white w-75 text-center mx-auto peragraph">
            Reading books is essential because it expands our knowledge,
            enhances our language skills, stimulates our intellect, provides
            relaxation, and nurtures empathy. Whether for personal growth,
            academic pursuits, or pure enjoyment, books offer a gateway to
            endless possibilities and serve as a lifelong companion in our quest
            for knowledge and self-discovery.
          </p>
        </div>
      </div>
      <BookStore query="Javascript" />
      <BookStore query="Frontend" />
      <BookStore query="Backend" />
      <BookStore query="Developer" />
    </>
  );
};

export default Home;
