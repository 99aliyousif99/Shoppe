import React, { useState, useEffect } from "react";
import "./QuantitySelector.css";

const QuantitySelector = ({ initialQuantity, onQuantityChange, size }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 1);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

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
    <div className={`quantity ${size}`}>
      <div className="amount">
        <div className="decrease" onClick={handleDecrease}>-</div>
        <div className="num">{quantity}</div>
        <div className="increase" onClick={handleIncrease}>+</div>
      </div>
    </div>
  );
};

export default QuantitySelector;