import React from "react";
import Image from "../../assets/ProductImage.png";
import "./ProductCard.css"
const ProductCard = () => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <p>Lorem ipsum dolor s</p>
        <span>17 $</span>
      </div>
    </>
  );
};

export default ProductCard;
