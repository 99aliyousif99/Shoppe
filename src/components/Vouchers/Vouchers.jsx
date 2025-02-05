import React, { useState } from "react";
import Drawer from "react-modern-drawer";

import "./Vouchers.css";
const Vouchers = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="vouchers">
        <button onClick={toggleDrawer}>Add Voucher</button>

        <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="bottom"
        size="50%"
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      >
            s
        </Drawer>
      </div>
    </>
  );
};

export default Vouchers;
