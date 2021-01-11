import React from "react";
import { NavLink } from "react-router-dom";
import "./PastaWork.css";
import Products from "./Products/Products";

import logo from "../image/logonobg-01.png";

function PastaWork() {
  return (
    <div className="pastawork">
      <div className="pastawork__top">
        <div className="pastawork__topLeft">
          <NavLink to="/">
            <img src={logo} alt="throwback pasta logo" />
          </NavLink>
        </div>

        <div className="pastawork__topRight">
          <h3>Original Pasta Lessons</h3>
        </div>
      </div>

      <div className="pastawork__container">
        <div className="pastawork__left">
          <h3>Pasta Workshop</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making{" "}
          </p>
        </div>

        <div className="pastawork__right">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default PastaWork;
