import React from "react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="box">
      <h2>Welcome</h2>
      <form className="form">
        <label className="text">Username</label>
        <input type="text" placeholder="Username"></input>
        <label className="label">Email</label>
        <input type="text" placeholder="Email"></input>
        <label className="label">Password</label>
        <input type="text" placeholder="Password"></input>

        <div className="buttonstyle">
          <button>Sign Up</button>
        </div>

        <h4>or Log In with</h4>
        <hr></hr>

        <div className="icons">
          <FaFacebook />
          <FaInstagram />
          <FaGoogle />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
