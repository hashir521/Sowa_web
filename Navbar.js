import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="logo192.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          ></img>
          <b> Getamover</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="anchor-color"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Removal Companies
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Removal Cost
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Removal Cheaper
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Furniture Removal
                  </a>
                </li>
                <div class="dropdown-divider"></div>
                <a id="anchor-color" class="dropdown-item" href="#">
                  Removal Comapnies
                </a>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="anchor-color"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Removal Van
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Removal Van Cost
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Man With A Van
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <div class="dropdown-divider"></div>
                <a id="anchor-color" class="dropdown-item" href="#">
                  Removal all Van
                </a>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="anchor-color"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                International
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    International Cost
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Another Van
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    International Services
                  </a>
                </li>
                <div class="dropdown-divider"></div>
                <a id="anchor-color" class="dropdown-item" href="#">
                  International Removal
                </a>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="anchor-color"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Domestic
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Removal Companies in London
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Removal Companies in Glasgow
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Removal Companise in Manchester
                  </a>
                </li>
                <div class="dropdown-divider"></div>
                <a id="anchor-color" class="dropdown-item" href="#">
                  Removal Companies by City
                </a>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="anchor-color"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Help + Advice
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a id="anchor-color" className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <div class="dropdown-divider"></div>
                <a id="anchor-color" class="dropdown-item" href="#">
                  Help and Advice
                </a>
              </ul>
            </li>

            <li className="flat-sm-right nav-item">
              <a
                className="nav-link"
                href="#"
                id="anchor-color"
                role="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                Become Partner
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
