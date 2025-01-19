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
          <img src={product.subImages[1]} alt="" />
         </div>
      </div>
    </div>
  );
};

export default Product;
