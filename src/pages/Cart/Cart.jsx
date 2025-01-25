import React, { useState } from "react";
import "./cart.css";
import { MdOutlineEdit } from "react-icons/md";
import useCartStore from "../../store/cartStore";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = product.quantity || 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,

    }));
    console.log(cart)
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="shipping">
        <span>Shipping address</span>
        <div className="location">
          <p>26, Duong So 2, Thao Dien Ward</p>
          <button className="editAddress">
            <MdOutlineEdit />
          </button>
        </div>
      </div>
      {cart.map((product) => (
        <div key={product.id} className="cartProduct">
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="info">
            <p className="name">{product.name}</p>
            <p className="size">size {product.size}</p>
            <div className="price">
              <p>${(product.price * quantities[product.id]).toFixed(2)}</p>
              <QuantitySelector
                initialQuantity={quantities[product.id]}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(product.id, newQuantity)
                }
                size="small"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;