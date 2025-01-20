import React, { useState } from "react";
import "./Product.css";

const Product = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
  const handleSize = (size) => {
    setSelectedSize(size);
  };
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
        <div className="size">
          {sizes.map((size) => (
            <div
              className="sizes"
              onClick={() => handleSize(size)}
              style={{
                border: selectedSize === size ? "2px solid #004CFF" : "none",
                backgroundColor: selectedSize === size ? "#E5EBFC " : "f9f9f9",
              }}
            >
              {size}
            </div>
          ))}
        </div>
        <div className="quantity">
          <p>Quantity</p>
          <div className="amount">
            <div className="decrease">-</div>
            <div className="num"></div>
            <div className="increase">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
