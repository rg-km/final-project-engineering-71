import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [user, setUser] = React.useState("Muhammad Riko Bediatra");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const checkUser = async () => {
    const response = await axios.get("http://localhost:8080/api/user");
    if (response.data.user) {
      setUser(response.data.user);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const [isActive, setIsActive] = React.useState("home");

  React.useEffect(() => {
    checkUser();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top poppins">
      <div className="container">
        <a
          className="navbar-brand fw-bold text-uppercase"
          style={{ color: "#8142D0" }}
          href="/"
        >
          Karyain
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto mb-4 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`${
                  isActive === "home" ? "nav-link active" : "nav-link"
                }`}
                onClick={() => setIsActive("home")}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${
                  isActive === "category" ? "nav-link active" : "nav-link"
                }`}
                onClick={() => setIsActive("category")}
                to="/category"
              >
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${
                  isActive === "about" ? "nav-link active" : "nav-link"
                }`}
                onClick={() => setIsActive("about")}
                to="/about"
              >
                About
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="##"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Halo, {user}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/dashboard">
                      My Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="##">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <i className="fa-solid fa-magnifying-glass"></i>&nbsp; Pencarian
        </div>
      </div>
    </nav>
  );
}
