import React from "react";
import "./Header.css";
import {BsArrowRight} from "react-icons/bs";
import {FcCheckmark} from "react-icons/fc";

function Header() {
  
  return (
    <div className = "container">
    <div className="header">
        <div className="header-img">
          <img src="right-panel.png" alt="hero-move" />
        </div>
        <div className="header-content">
          <h2>Move house with top-rated removal company</h2>

          <p>Compare up to 6 quotes from trusted moving companies and save.</p>

          <div className="connect-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Enter your post code" />
              </div>
              <div className="submit_btn">
                <button className="btn__quote" type="submit">
                  Go{" "}
                  <BsArrowRight
                    style={{
                      marginLeft: "0.2rem",
                      fontSize: "20",
                      fontWeight: "bold",
                    }}
                  />{" "}
                </button>
              </div>
            </form>
          </div>

          <ul>
            <li>
              {" "}
              <FcCheckmark className="check-icon" />
              Discover your ideal mover with ease
            </li>
            <li>
              {" "}
              <FcCheckmark className="check-icon" />
              Access verified reviews
            </li>
            <li>
              {" "}
              <FcCheckmark className="check-icon" />
              Make your move worry-free!
            </li>
          </ul>
        </div>
      </div>
      </div>

  );
}

export default Header;
