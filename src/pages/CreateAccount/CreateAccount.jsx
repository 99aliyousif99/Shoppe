import React, { useRef, useState } from "react";
import "./CreateAccount.css";
import uploadPhoto from "../../assets/upload photo.svg";

const CreateAccount = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <>
      <div className="signUp">
        <h1>Create</h1>
        <h1>Account</h1>
        <div className="upload" onClick={handleImageClick}>
          <img src={uploadPhoto} alt="Upload Photo" />
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <form className="SignUpForm" onSubmit={handleSubmit}>
          <div>
            <input
            placeholder="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
            placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
            placeholder="phone number"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Done</button>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
