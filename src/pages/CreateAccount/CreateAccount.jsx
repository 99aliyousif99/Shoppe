import React from "react";
import "./CreateAccount.css";
import uploadPhoto from "../../assets/upload photo.svg";

const CreateAccount = () => {
  return (
    <>
      <div className="signUp">
        <h1>Create</h1>
        <h1>Account</h1>
        <div className="upload">
         
          <img src={uploadPhoto} alt="Upload Photo" />
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
