import React, { useState } from "react";
import "./ProductCard.css";
import Product from "../Product/Product";

const ProductCard = ({ product }) => {
  const [showProduct, setShowProduct] = useState(false);

  const handleCardClick = () => {
    setShowProduct(true);
  };

  const handleClose = () => {
    setShowProduct(false);
  };

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <div className="image">
          <img src={product.image} alt={product.name} />
        </div>
        <p>{product.name}</p>
        <span>17 $</span>
      </div>
      {showProduct && (
        <div className="product-overlay">
          <Product product={product} onClose={handleClose} />
        </div>
      )}
    </>
  );
};

export default ProductCard;