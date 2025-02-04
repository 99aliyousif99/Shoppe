import React from "react";
import "./Profile.css";
import avatar from "../../assets/avatar.png";
import { CiSettings } from "react-icons/ci";
import { LuScanLine } from "react-icons/lu";
import { BsTextRight } from "react-icons/bs";
import voucher1 from "../../assets/voucher1.svg";
import voucher2 from "../../assets/voucher2.svg";
const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="header">
          <div className="name">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
            <h2>Vouchers</h2>
          </div>
          <div className="settings">
            <div className="container" style={{backgroundColor:"#004CFF"}}>
              <LuScanLine style={{color:"white"}} />
            </div>
            <div className="container">
              <CiSettings />
            </div>
            <div className="container">
              <BsTextRight />
            </div>
          </div>
        </div>
        <div className="rewards">
          <button>Active Rewards</button>
          <button>Progress</button>
        </div>
        <div className="vouchers">
          <img src={voucher1} alt="" />
          <img src={voucher2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Profile;
