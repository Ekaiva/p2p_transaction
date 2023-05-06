import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Common/ErrorMessage";
import ToastMsg from "../Common/ToastMsg";
import { signUpuser } from "../services/api";
import "../Style/SignUpPage.css";

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const[loader,setLoader]=useState(false)

  const handleChange = (value, name) => {
    setFormErrors({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    });

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm(formData);

    if (errors) {
      setFormErrors(errors);
    }

    let reqBody = {
      email: formData?.email,
      password: formData?.password,
    };
    setLoader(true)
    signUpuser(reqBody)
      .then((res) => {
        console.log("pramod", res);
        setLoader(false)
        ToastMsg(
          "Account Created Successfully",
          "success"
        );
       navigate("/login")
      })
      .catch((err) => {
        setLoader(false)
        let error  = err?.response?.data?.detail || err?.response?.data?.email||"something went wrong";
        ToastMsg(error, "error");
      });
  };

  const validateForm = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\d{10}$/;

    if (!data.fullName.trim()) {
      errors.fullName = "Please enter your first name";

      return errors;
    }

    if (!data.email.trim()) {
      errors.email = "Please enter your email";
      return errors;
    } else if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address";
      return errors;
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = "Please enter your phone number";
      return errors;
    } else if (!phoneRegex.test(data.phoneNumber.trim())) {
      errors.phoneNumber = "Please enter a valid phone number";
      return errors;
    }

    if (!data.password) {
      errors.password = "Please enter a password";
      return errors;
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      return errors;
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
      return errors;
    }
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
          />
          {formErrors.fullName && (
            <ErrorMessage className="error" msg={formErrors.fullName} />
          )}
        </div> */}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
          />
          {formErrors.email && (
            <ErrorMessage className="error" msg={formErrors.email} />
          )}
        </div>
        {/* <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => {
              handleChange(e.target.value.slice(0, 10), e.target.name);
            }}
          />
          {formErrors.phoneNumber && (
            <ErrorMessage className="error" msg={formErrors.phoneNumber} />
          )}
        </div> */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
          />
          {formErrors.password && (
            <ErrorMessage className="error" msg={formErrors.password} />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
          />
          {formErrors.confirmPassword && (
            <ErrorMessage className="error" msg={formErrors.confirmPassword} />
          )}
        </div>
       {loader? <button >Processing...</button>:
        <button type="submit">Sign Up</button>}
      </form>
    </div>
  );
};

export default SignUp;
