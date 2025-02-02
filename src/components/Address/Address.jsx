import React, { useState } from "react";
import "./Address.css";
import { MdOutlineEdit } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Address = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [address, setAddress] = useState({
    address: "",
    townCity: "",
    postcode: "",
  });

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("new Drone strike Zone:", address);
    toggleDrawer();
  };

  return (
    <>
      <div className="shipping">
        <span>Shipping address</span>
        <div className="location">
          <p>{address.address} ,{address.townCity} ,{address.postcode} </p>
          <button className="editAddress" onClick={toggleDrawer}>
            <MdOutlineEdit />
          </button>
        </div>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="bottom"
        size="50%"
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      >
        <div className="locations">
          <div className="name">
            <h1>Shipping Address</h1>
          </div>
          <div className="edit">
            <p>Address</p>
            <input
              type="text"
              name="address"
              value={address.address}
              onChange={handleChange}
            />
            <p>Town/City</p>
            <input
              type="text"
              name="townCity"
              value={address.townCity}
              onChange={handleChange}
            />
            <p>Postcode</p>
            <input
              type="text"
              name="postcode"
              value={address.postcode}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Save Changes</button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Address;