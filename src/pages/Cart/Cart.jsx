import React, { useState } from "react";
import "./cart.css";
import { MdOutlineEdit } from "react-icons/md";
import useCartStore from "../../store/cartStore";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import { useNavigate } from "react-router-dom";
import Address from "../../components/Address/Address";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = product.quantity || 1;
      return acc;
    }, {})
  );
  const navigate = useNavigate();

console.log(cart)

const handleCheckout = () => {
  navigate("/checkout");
};

const totalValue =()=>{
  let total =0
  for (let items of cart){
     total += items.price * items.quantity
  }
  return total
}
console.log(totalValue())
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
    } else {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: newQuantity,
      }));
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[productId];
      return newQuantities;
    });
  };
 
  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        <Address />
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
      <div className="total">
        <p>total ${totalValue()}</p>
        <button onClick={handleCheckout}>checkout</button>
      </div>
    </>
  );
};

export default Cart;
