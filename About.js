import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container border-bottom">
      <div className="about-us py-5 row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-4 rounded-3">
            <p className="text-primary">About us</p>
            <h2>We connect people and removal companies</h2>
            <p className="text-secondary">
              With more than 15 years of experience and an international team of
              experts, it is our mission to take the hassle out of moving.
            </p>
            <ul className="nav flex-column">
              <div class="py-2 sd-mb-1 sd-mb-lg-1_5">
                <img class="h-2_5 h-lg-auto" src="aboutUs.png"></img>
              </div>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Learn about us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-4">
          <div className="about-us-card h-100 p-5">
            <h3>Are you a moving company?</h3>
            <p className="mt-3 text-secondary">
              We'll connect you to potential customers who are moving house and
              help you promote your business.
            </p>
            <button className="mt-3 btn btn-outline-primary" type="button">
              Join us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
