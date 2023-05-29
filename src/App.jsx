import React from "react";
import UserAuth from "./component/user authentication/UserAuth";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer";
import ProductDetail from "./component/pages/product/ProductDetail";
import AddtoCard from "./component/pages/AddToCart/AddToCart";
import BookStore from "./component/pages/storePage/BookStore";
const App = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<ProductDetail />} />
          <Route path="/store" element={<BookStore />} />
          <Route path="/addtocart" element={<AddtoCard />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
