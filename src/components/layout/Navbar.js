import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">
              Conntact
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/contact/add">ADD</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
