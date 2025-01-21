import React, { useState } from "react";
import "./QuantitySelector.css";

const QuantitySelector = ({ initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 1);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="quantity">
      <p>Quantity</p>
      <div className="amount">
        <div className="decrease" onClick={handleDecrease}>-</div>
        <div className="num">{quantity}</div>
        <div className="increase" onClick={handleIncrease}>+</div>
      </div>
    </div>
  );
};

export default QuantitySelector;