import React from "react";
import bg from "./img/bg.jpg";
import "./style/style.css";
const UserAuth = () => {
  const signup = () => {};

  const signin = () => {};

  return (
    <>
      <section
        class="vh-100"

        //   style="background-color: #9A616D;"
      >
        <div class="container-fluid ">
          <div class="row d-flex justify-content-center align-items-center bg-dark ">
            <div class="col col-xl-10">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={bg}
                      alt="login form"
                      class="img-fluid"
                      //   style="border-radius: 1rem 0 0 1rem;"
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <h1 class="fw-normal mb-3 pb-3 ">
                          Sign into your account
                        </h1>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="text"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="text">
                            Email address
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="Signin"
                            id="email"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="email">
                            Signin
                          </label>
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="password">
                            Password
                          </label>
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-dark btn-lg btn-block"
                            type="button"
                          >
                            Login
                          </button>
                        </div>

                        <p class="mb-5 pb-lg-2">
                          Don't have an account? <a href="#!">Register here</a>
                        </p>
                      </form>
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
};

export default UserAuth;
