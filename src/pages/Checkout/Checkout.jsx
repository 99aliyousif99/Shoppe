import React from 'react'
import "./Checkout.css";
import useCartStore from "../../store/cartStore";
import Address from "../../components/Address/Address";

const Checkout = () => {
  const cart = useCartStore((state) => state.cart);
 
  console.log(cart)
  const totalValue =()=>{
    let total =0
    for (let items of cart){
       total += items.price * items.quantity
    }
    return total
  }

  return (
    <>
      <div className="payment">
        <h1>payment</h1>
        <Address />
        <div className="products">
          <div className="vouchers">
            <div className="ems">
            <h2>items</h2>
            <div className="quan">{cart.length}</div>
            </div>
            <button>Add Voucher</button>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Checkout