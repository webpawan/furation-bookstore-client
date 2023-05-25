import React, { useState } from "react";
import img from "./img/bg.jpg";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "./style/style.css";
// import { useNavigate } from "react-router-dom";

const Auth = () => {
  //   const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [page, setPage] = useState(false);

  const submitHandler = async (e) => {
    if (!name || !email || !password) {
      return toast.error("Fill the all fields", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,

        draggable: true,
        progress: undefined,
      });
    }

    try {
      const { data } = await toast.promise(
        axios.post(`/api/user/signup`, { name, email, password }),
        {
          pending: "registration in process",
          success: "registration is completed",
          error: "try with different email'id ",
        }
      );

      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        // navigate("/home");
      } else {
        res.status(400).send("user trying with same email id");
      }
    } catch (error) {
      console.log(error);
      res.status(400).send("signUp Problem");
    }
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Fill the all fields", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,

        draggable: true,
        progress: undefined,
      });
    }

    try {
      const { data } = await toast.promise(
        axios.post(`/api/user/signin`, { email, password }),
        {
          pending: "signin in process",
          success: "signin is completed",
          error: "please enter valid user details ",
        }
      );

      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        // navigate("/home");
      }
    } catch (error) {
      res.status(400).json("signin Problem");
    }
  };

  if (!page) {
    return (
      <>
        <ToastContainer />

        <section
          className="vh-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#17182f" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5  d-none d-md-block img-container  ">
                      <img
                        src={img}
                        alt="login form"
                        className="img-fluid img "
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form>
                          <h5
                            className="fw-normal mb-3 pb-3 display-6"
                            style={{ letterSpacing: "1px" }}
                          >
                            Create Your Account
                          </h5>
                          <div className="form-outline mb-2">
                            <input
                              type="text"
                              id="Name"
                              className="form-control form-control-lg"
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                            <label className="form-label" htmlFor="Name">
                              name
                            </label>
                          </div>
                          <div className="form-outline mb-2">
                            <input
                              type="email"
                              id="Email"
                              className="form-control form-control-lg"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <label className="form-label" htmlFor="Email">
                              Email address
                            </label>
                          </div>

                          <div className="form-outline mb-2">
                            <input
                              type="password"
                              id="Password"
                              className="form-control form-control-lg"
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <label className="form-label" htmlFor="Password">
                              Password
                            </label>
                          </div>

                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-dark btn-lg btn-block"
                              type="button"
                              onClick={submitHandler}
                            >
                              Sign Up
                            </button>
                          </div>
                        </form>
                        <div className="  mx-auto text-dark mt-5 ">
                          <p className="mb-2">
                            Do you have already account please{" "}
                            <button
                              className="mx-2 btn btn-dark btn-lg btn-block"
                              type="button"
                              onClick={() => setPage(1)}
                            >
                              Log in
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <ToastContainer />

        <section
          className="vh-100  d-flex justify-content-center align-items-center "
          style={{ backgroundColor: "#17182f" }}
        >
          <div className="container  h-70 overflow-hidden">
            <div className="row d-flex justify-content-center align-items-center h-70">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your email and password!
                      </p>
                      <div className="form-outline form-white mb-3">
                        <input
                          type="email"
                          id="Email"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label my-1" htmlFor="Email">
                          Email
                        </label>
                      </div>
                      <div className="form-outline form-white my-1">
                        <input
                          type="password"
                          id="Password"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="Password">
                          Password
                        </label>
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={loginSubmitHandler}
                      >
                        Login
                      </button>
                    </div>
                    <div>
                      <p className="mb-0 mt-2">
                        Don't have an account?{" "}
                        <a
                          href="#"
                          className="text-white-50 fw-bold"
                          onClick={() => setPage(0)}
                        >
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Auth;
