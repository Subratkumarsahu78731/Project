import React from 'react'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-dark bg-info navbar-expand-sm mt-2">
        <div className="container-fluid">
          <div
            class="navbar-nav "
            style={{ marginLeft: "40%", fontSize: "20px" }}
          >
            <button className="btn btn-outline-secondary btm-lg">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </button>
            <button className="btn btn-outline-secondary btm-lg ms-2">
              <a class="nav-link text-white" href="/favorites">
                Login
              </a>
            </button>
            {/* <button className="btn btn-outline-secondary btm-lg ms-2">
              <a class="nav-link text-white" href="/favorites">
                Signup
              </a>
            </button> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header