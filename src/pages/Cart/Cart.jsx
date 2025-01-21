import React from "react";
import "./cart.css";
import { MdOutlineEdit } from "react-icons/md";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        <div className="shipping">
          <span>shippig address</span>
          <div className="location">
            <p>
              26, Duong So 2, Thao Dien Wardsssssssssssssss
            </p>
            <button className="editAddress">
              <MdOutlineEdit />
            </button>
          </div>
        </div>
        <div className="cartProduct">
          <div className="image"></div>
          <div className="info">
          <p className="name">Lorem ipsum dolor sit amet </p>
          <p className="size">size M</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Cart;
