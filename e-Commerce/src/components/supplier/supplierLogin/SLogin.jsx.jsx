/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./formCss.css";
import { NavLink } from "react-router-dom";

const SLogin = () => {
  const [form, setForm] = useState({});

  const updateForm = (updates) => {
    setForm((prevForm) => ({ ...prevForm, ...updates }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login Form Data:", form);
  };

  return (
    <div className="container1">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email or Phone Number</label>
          <input
            type="text"
            placeholder="Enter Email or Phone Number"
            name="email"
            required
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>

        <button type="submit" className="btn-signin">
          Sign In
        </button>
        {/* Other buttons */}
      </form>
      <p>
        New user?{" "}
        <NavLink to="/SupplierSignUp" className="">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default SLogin;
