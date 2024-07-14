import React, { useState } from "react";
import "./formCss.css";
import { NavLink } from "react-router-dom";

const SupSignUp = () => {
  const [form, setForm] = useState({
    companyName: "",
    industry: "",
    email: "",
    phone: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const updateForm = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!form.companyName) {
      errors.companyName = "Company name is required";
    }
    if (!form.industry) {
      errors.industry = "Industry is required";
    }
    if (!form.email) {
      errors.email = "Email is required";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Perform account creation (e.g., send API request)
      console.log("Valid form data:", form);
      // Clear the form:
      setForm({
        companyName: "",
        industry: "",
        email: "",
        phone: "",
        password: "",
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company/Organisation Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={form.companyName}
            onChange={(e) => updateForm("companyName", e.target.value)}
          />
          {formErrors.companyName && (
            <span className="error">{formErrors.companyName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="industry">Company/Organisation Industry:</label>
          <input
            type="text"
            id="industry"
            name="industry"
            required
            value={form.industry}
            onChange={(e) => updateForm("industry", e.target.value)}
          />
          {formErrors.industry && (
            <span className="error">{formErrors.industry}</span>
          )}
        </div>
        <button type="submit">Sign Up</button>
        <p>
          already a user?{" "}
          <NavLink to="/slogin" className="text-lg px-2">
            Sign in
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SupSignUp;
