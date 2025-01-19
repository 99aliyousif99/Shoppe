import React from "react";
import "./Product.css";

const Product = ({ product, onClose }) => {
  console.log(product);

  return (
    <div className="prod">
      <div className="imageCover">
        <img src={product.image} alt="" />
      </div>
      <div className="options">
        <p>color options</p>
        <div className="colors">
          <img src={product.subImages[0]} alt="" />
          <img src={product.subImages[1]} alt="" />
          <img src={product.subImages[2]} alt="" />
          <img src={product.subImages[3]} alt="" />
        </div>
        <p>Size</p>
      </div>
    </div>
  );
};

export default Product;
