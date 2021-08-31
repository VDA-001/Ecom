import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import TshirtIcon from "../Icon/TshirtIcon.png";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#48cae4" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history, path }) => {
  return (
    <div>
      <ul className="nav nav-tabs fixed-top justify-content-center NavBar">
        <a class="navbar-brand" href="/">
          <img src={TshirtIcon} width="30" height="30" alt="" loading="lazy" />
        </a>
        <li className="nav-item">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        {isAuthenticated() && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/cart")}
              className="nav-link"
              to="/cart"
            >
              Cart
            </Link>
          </li>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              Dashboard
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
                Signin
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item signouts">
            <a
              href="/"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
              className="nav-link text-light"
            >
              Signout
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
