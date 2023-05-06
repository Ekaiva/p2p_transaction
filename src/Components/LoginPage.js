import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Common/ErrorMessage";
import ToastMsg from "../Common/ToastMsg";
import { getNounce, loginUser } from "../services/api";
import LoginWithEth from "./LoginWithEth";

export default function LoginPage() {


  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const[loader,setLoader]=useState(false)
  const[show,setShow]=useState(false)


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
   setLoader(true)
     loginUser(formData).then((res)=>{

      setLoader(false)
      console.log(res)
      localStorage.setItem("token",res.data.access)
      navigate("/ads")

     }).catch((err)=>{
      setLoader(false)
      let error  = err?.response?.data?.detail || err?.response?.data?.email||"something went wrong";
      alert(error)
      ToastMsg(error, "error");
      
     })
  };
const handleEtheriumLogin =()=>{
  getNounce().then((res)=>{
    console.log("pramod",res)
    setShow(true)

  }).catch((err)=>{
    console.log("err",err)
    alert(err?.response?.data?.error||"some thing went wrong")

  })

}
  return (
    <div className="login-page">
    { show&& <LoginWithEth/>}
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
       
        {loader? <button className="process" >Processing...</button>: <button type="submit">Log In</button>}
        <hr></hr>
        <p>OR</p>
       <button onClick={()=>{
         handleEtheriumLogin()
       }}> Sign in With Etherium </button>
      </form>
    </div>
  );
}
