import React from "react";
import "./style/style.css";
import BookStore from "./BestBooks";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container-fluid bg-dark Home"
      >
        <div
          className="row
        home-container overflow-hidden"
        >
          <motion.h1
            initial={{ opacity: 0, x: "-100px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: ".5",
              type: "spring",
              stiffness: 30,
            }}
            className="display-2  text-light  d-flex justify-content-center"
          >
            THE BIGGEST{" "}
            <span className="text-secondary bg-light px-3 display-1">
              IT BOOKSTORE
            </span>{" "}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: "100px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: "1",
              type: "spring",
              stiffness: 30,
            }}
            className="text-white w-75 text-center mx-auto peragraph"
          >
            Reading books is essential because it expands our knowledge,
            enhances our language skills, stimulates our intellect, provides
            relaxation, and nurtures empathy. Whether for personal growth,
            academic pursuits, or pure enjoyment, books offer a gateway to
            endless possibilities and serve as a lifelong companion in our quest
            for knowledge and self-discovery.
          </motion.p>
        </div>
      </motion.div>
      <BookStore query="Javascript" />
      <BookStore query="Frontend" />
      <BookStore query="Backend" />
      <BookStore query="Developer" />
    </>
  );
};

export default Home;
