import React from "react";
import logo from "../../assets/logo.svg";
import { FaArrowRight } from "react-icons/fa";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <div className="main">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Shoppe</h1>
        <p>Beautiful eCommerce UI Kit</p>
        <p> for your online store</p>
        <div className="routing">
          <button className="started">Let's get started</button>
          <div className="account">
            <p>I already have an account</p>
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
