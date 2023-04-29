import React, { useState } from "react";
import ErrorMessage from "../Common/ErrorMessage";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setFormErrors({
      ...formErrors,
      [event.target.name]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
      setFormErrors(errors);
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      setFormErrors(errors);
      return;
    }

    if (!formData.password) {
      errors.password = "Password is required";
      setFormErrors(errors);
      return;
    }

    if (Object.keys(errors).length === 0) {
      // Submit form
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData?.email}
            onChange={handleChange}
            required={false}
          />
          <ErrorMessage msg={formErrors?.email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData?.password}
            onChange={handleChange}
          />
          <ErrorMessage msg={formErrors?.password} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
