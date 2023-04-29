import axios from 'axios';
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const headersApplicationJson = {
    "Content-Type": "application/json",
  };
  
  let token = localStorage.getItem("token");
  
  
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

export const signUpuser =(params)=>{
    
    let url = `https://getusd.onrender.com/authentication/api/v1/user/`;
    console.log("param",url)
    return axios.post(url, params, {
        headers: headersApplicationJson,
      });
}