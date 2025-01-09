import React from "react";
import "./Product.css";

const Product = ({ product, onClose }) => {
  console.log(product);

  return (
    <div className="product">
      <div>Product: {product.name}</div>
    </div>
  );
};

export default Product;
