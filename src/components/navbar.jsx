import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <>
        <nav className="grey lighten-4">
          <div className="nav-wrapper">
            <a
              data-target="slide-out"
              className="sidenav-trigger black-text"
            >
              <i className="material-icons">menu</i>
            </a>
            <span className="black-text">Hutang App</span>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav sidenav-close">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/pelanggan"}>Data Pelanggan</Link>
          </li>
          <li>
            <Link to={"/hutang"}>Data Hutang</Link>
          </li>
          <li>
            <Link to={"/absen"}>Absen</Link>
          </li>
          <li>
            <Link to={"/pasar"}>Data Pasar</Link>
          </li>
          <li>
            <Link to={"/jalur"}>Jalur</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Navbar;
