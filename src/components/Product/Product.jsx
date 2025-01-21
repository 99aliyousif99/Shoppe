import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import "./Product.css";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const Product = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1); 
  const [cart, setCart] = useState([]);
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

  const handleSize = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const productDetails = {
      ...product,
      size: selectedSize,
      quantity: quantity,
    };
    setCart([...cart, productDetails]);
    console.log("Cart:", cart);
  };

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
        <QuantitySelector initialQuantity={quantity} onQuantityChange={handleQuantityChange} />
      </div>
      <div className="addTo">
        <div className="favorites"><CiHeart /></div>
        <div className="addcart" onClick={handleAddToCart}>Add to cart</div>
        <div className="buy">Buy now</div>
      </div>
    </div>
  );
};

export default Product;