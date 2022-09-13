import React from "react";

const Login = () => {
  return (
    <>
      {/* <section>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-warning text-white">
                  <p className="h4">Login Here</p>
                </div>
                <div className="card-body bg-light">
                  <form>
                    <div className="form-group mt-2">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group mt-2">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>

                    <div className="form-group mt-2">
                      <input
                        type="submit"
                        className="btn btn-warning btn-sm"
                        value="Login"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="d-flex justify-content-center align-items-center container">
        <div
          className="h-90 mt-3 w-40 ml-5 mt-5 shadow-lg p-15 mb-15 bg-info rounded"
          style={{ padding: "35px 55px 35px 55px" }}
        >
          <form  className="d-block">
            <h3>Login</h3>
            <div className="form-group mt-2" >
              <label className="m-1">Email ID</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Email ID"
                required
              />
            </div>

            <div className="form-group mt-2" >
              <label className="m-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter Password"
                required
              />
            </div>
            <br />
            <button type="submit" className="btn btn-outline-dark btn-lg btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
