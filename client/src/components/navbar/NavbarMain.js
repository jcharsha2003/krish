import React, { useContext } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { loginContext } from "../../context/loginContext";
import "./NavbarMain.css";
import { Link } from "react-router-dom";
function NavbarMain() {
  let [currentUser, error, userLoginStatus, loginUser, logoutUser, role] =
    useContext(loginContext);

  return (
    <Navbar expand="lg" className="p-0 body text-white">
      <div className="container-fluid px-3 body1">
        <div>
          <Link className="nav-link" to="/">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/6491/6491579.png"
              width="55px"
              height="55px"
            ></img>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  ">
            <ul className="navbar-nav menu ms-auto text-decoration-none">
              <li className="nav-item active">
                <Link
                  className="nav-link text-white "
                  style={{ padding: "1.3rem" }}
                  to="/"
                >
                  Home
                </Link>
              </li>

              {!userLoginStatus ? (
                <ul className="navbar-nav menu ms-auto text-decoration-none">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-white  "
                    style={{ padding: "1.3rem" }}
                    to="/login"
                  >
                    Sign in
                  </Link>
                </li>
                  <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-white"
                    style={{ padding: "1.3rem" }}
                    to="/register"
                  >
                    Sign up
                  </Link></li></ul>
              ) : (
                
                <ul className="navbar-nav menu ms-auto text-decoration-none">
                <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white"
                  style={{ padding: "1.3rem" }}
                  to="/login"
                  onClick={logoutUser}
                >
                  LogOut
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white"
                  style={{ padding: "1.3rem" }}
                  to="/finance"
                  
                >
                  Finance Managment
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white"
                  style={{ padding: "1.3rem" }}
                  to="/courses"
                  
                >
                Courses  
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white"
                  style={{ padding: "1.3rem" }}
                  to="/weather"
                  
                >
                Weather
                </Link>
              </li>
                </ul>
              )}

              
                
                 
              
            </ul>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarMain;