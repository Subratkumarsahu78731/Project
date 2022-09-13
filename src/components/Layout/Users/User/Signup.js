import React from "react";

const Signup = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center container">
        <div
          className="h-90 mt-3 w-40 ml-5 mt-5 shadow-lg p-15 mb-15 bg-info rounded"
          style={{ padding: "35px 55px 35px 55px" }}
        >
          <form className="d-block">
            <h3>SignUp</h3>

            <div className="form-group mt-2">
              <label className="m-1">User Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter User Name"
                required
              />
            </div>
            <div className="form-group mt-2">
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

            <div className="form-group mt-2">
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
            <button
              type="submit"
              className="btn btn-outline-dark btn-lg btn-block"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
