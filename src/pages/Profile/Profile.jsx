import React from "react";
import "./profile.css";
import avatar from "../../assets/avatar.png";
import { CiSettings } from "react-icons/ci";
import { LuScanLine } from "react-icons/lu";
import { BsTextRight } from "react-icons/bs";

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
            <div className="container">
              <LuScanLine />
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
      </div>
    </>
  );
};

export default Profile;
