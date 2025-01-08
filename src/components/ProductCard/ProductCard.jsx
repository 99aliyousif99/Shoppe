import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>
      <p>{product.name}</p>
      <span>17 $</span>
    </div>
  );
};

export default ProductCard;