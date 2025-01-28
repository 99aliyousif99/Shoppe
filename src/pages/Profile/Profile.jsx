import React from "react";
import "./profile.css";
import avatar from "../../assets/avatar.png"
const Profile = () => {
  return (
    <>
      <div className="header">
        <div className="name">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <h2>Vouchers</h2>
        </div>
        <div className="settings">
          
        </div>
      </div>
    </>
  );
};

export default Profile;
