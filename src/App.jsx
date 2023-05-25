import React from "react";
import UserAuth from "./component/user authentication/UserAuth";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/footer";
const App = () => {
  return (
    <>
      {/* <UserAuth /> */}
      <h1>hello</h1>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
