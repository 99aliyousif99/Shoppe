import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import VoucherFrame from "../../assets/VoucherFrame.svg";
import vouchersData from "../../Data/vouchers.json";
import { FaGift } from "react-icons/fa6";

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
          <div className="VoucherBanner">
            <h2>Active Vouchers</h2>
          </div>
          <div className="avaliableVouchers">
          {vouchersData.vouchers.map((voucher, index) => (
              <div key={index} className="Avoucher">
                <div className="voucherr">
                  <h3>Voucher</h3>
                  <div className="validity">until {voucher.validity}</div>
                </div>
                <div className="dottedLine"></div>
                <div className="voucherName">
                  <FaGift style={{ color: "blue" }} />
                  <h3>{voucher.name}</h3>
                </div>
                <div className="amounts">
                  <p>{voucher.amount * 100}% off your next purchase</p>
                  <button>Apply</button>
                </div>
              </div>
            ))}
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Vouchers;
