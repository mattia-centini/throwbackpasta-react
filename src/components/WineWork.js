import React from "react";
import { NavLink } from "react-router-dom";
import "./WineWork.css";
import logo from "../image/logonobg-01.png";

function WineWork() {
  return (
    <div className="winework">
      <div className="winework__top">
        <div className="winework__topLeft">
          <NavLink to="/">
            <img src={logo} alt="throwback pasta logo" />
          </NavLink>
        </div>

        <div className="winework__topRight">
          <h3>Original Pasta Lessons</h3>
        </div>
      </div>

      <div className="winework__container">
        <div className="winework__left">
          <h3>Wine Tasting Workshop</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making{" "}
          </p>
        </div>

        <div className="winework__right"></div>
      </div>
    </div>
  );
}

export default WineWork;
