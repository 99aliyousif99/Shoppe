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
      </div>
    </>
  );
};

export default Cart;
