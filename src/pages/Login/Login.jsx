import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <p>Good to see you back!</p>
        <input type="text" placeholder="Email" />
        <button>Next</button>
      </div>
    </>
  );
};

export default Login;
