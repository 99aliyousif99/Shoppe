import React, { useState } from "react";
import "./checkout.css";
import useCartStore from "../../store/cartStore";
import Address from "../../components/Address/Address";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Checkout = () => {
  const cart = useCartStore((state) => state.cart);
  const [selectedShipping, setSelectedShipping] = useState("standard");


  const handleShippingSelect = (option) => {
 
    setSelectedShipping(option);

  };

  console.log(cart);
  const totalValue = () => {
    let total = 0;
    if (selectedShipping ==="express") {
      total = 12
    }
    for (let items of cart) {
      total += items.price * items.quantity;
    }
    return total;
  };

  return (
    <>
      <div className="payment">
        <h1>payment</h1>
        <Address />
        <div className="products">
          <div className="voucher">
            <div className="ems">
              <h2>items</h2>
              <div className="quan">{cart.length}</div>
            </div>
            <button>Add Voucher</button>
          </div>

          {cart.map((product) => (
            <div key={product.id} className="stuff">
              <div className="stuffimg">
                <img src={product.image} alt={product.name} />
                <div className="num">{product.quantity}</div>
              </div>
              <p>{product.name}</p>
              <h3>${(product.price * product.quantity).toFixed(2)}</h3>
            </div>
          ))}

          <div className="shippingOptions">
            <h2>Shipping Options</h2>

            <div
              className={`standard ${
                selectedShipping === "standard" ? "selected" : ""
              }`}
              onClick={() => handleShippingSelect("standard")}
            >
              <IoIosCheckmarkCircle className="icon" />
              <h3>Standard</h3>
              <div className="time">5-7 days</div>
              <h4>Free</h4>
            </div>
            <div
              className={`express ${
                selectedShipping === "express" ? "selected" : ""
              }`}
              onClick={() => handleShippingSelect("express")}
            >
              <IoIosCheckmarkCircle className="icon" />
              <h3>Express</h3>

              <div className="time">1-2 days</div>
              <h4>$12.99</h4>
            </div>
            <p>Delivered on or before Thursday, 23 April 2020</p>
          </div>
        </div>
      </div>
      <div className="total">
        <p>total ${totalValue()}</p>
        <button>Pay</button>
      </div>
    </>
  );
};

export default Checkout;
