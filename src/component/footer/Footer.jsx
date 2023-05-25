import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="m-0   " />
      <div className="container-fluid p-5" style={{ backgroundColor: "black" }}>
        <div className="row text-white">
          <div className="col-10 col-sm-4  mx-auto text-center">
            <div className="display-1">BookStore</div>
          </div>
          <div className="col-10 col-sm-8 d-flex justify-content-around flex-wrap mx-auto text-center">
            <div className="mx-3">
              <p>Home</p>
              <p>Book</p>
              <p>Cart</p>
            </div>
            <div className="mx-3">
              <p>Feature</p>
              <p>Events</p>
              <p>Contact & Hours</p>
            </div>
            <div className="mx-3">
              <p>Help & FAQ</p>
              <p>work with us</p>
              <p>Carrers</p>
            </div>{" "}
            <div className="mx-3">
              <p>Follow Us</p>
              <div className="d-flex">
                <a>
                  <span>
                    <i class="fa-brands fa-twitter"></i>
                  </span>
                </a>
                <a className="mx-3">
                  <span>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </span>
                </a>{" "}
                <a>
                  <span>
                    <i class="fa-brands fa-whatsapp"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
