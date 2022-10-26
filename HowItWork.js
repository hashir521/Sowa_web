import React from "react";
import "./HowItWork.css";

const Steps = [
  {
    id: 1,
    title: " Describe your move",
    content:
      "Answer a few questions and discover which companies meet your requirements.",
  },
  {
    id: 2,
    title: "Compare quotes",
    content:
      "Check out company profiles and reviews to help make your decision.",
  },
  {
    id: 3,
    title: "Choose your preferred mover",
    content: "Take the first step towards enjoying your new home.",
  },
];
const HowItWork = () => {
  return (
    <div className="container">
      <div className="card__container">
        <div className="card__container-body">
          <p className="card_title">How it works</p>

          <h2 className="title_content">
            Get connected to moving companies that match your specifications
          </h2>

          <p className="card_content">
            Look forward to enjoy your new home and let us do the hefty work.
            Getamover will help you move, hassle-free.
          </p>
        </div>

        <div className="card__items-steps">
          <div className="item-steps">
            <h6>1</h6>
            <span></span>
            <h6>2</h6>
            <span></span>
            <h6>3</h6>
          </div>
          <div className="card__item-step">
            {Steps.map((step, index) => {
              return (
                <>
                  <div className="card__item-step-content" key={index}>
                    <h5>{step.title}</h5>
                    <p>{step.content}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
