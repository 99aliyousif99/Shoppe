import React, { useState } from "react";
import "./Address.css";
import { MdOutlineEdit } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const Address = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="shipping">
        <span>Shipping address</span>
        <div className="location">
          <p>26, Duong So 2, Thao Dien Ward</p>
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
        </div>
      </Drawer>
    </>
  );
};

export default Address;
