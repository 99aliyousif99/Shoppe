import React from 'react'
import "./Address.css";
import { MdOutlineEdit } from "react-icons/md";

const Address = () => {
  return (
    <div className="shipping">
          <span>Shipping address</span>
          <div className="location">
            <p>26, Duong So 2, Thao Dien Ward</p>
            <button className="editAddress">
              <MdOutlineEdit />
            </button>
          </div>
        </div>
  )
}

export default Address