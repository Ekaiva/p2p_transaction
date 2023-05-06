import axios from "axios";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const headersApplicationJson = {
  "Content-Type": "application/json",
};

let token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const signUpuser = (params) => {
  let url = `${API_ENDPOINT}/authentication/api/v1/user/`;
  console.log("param", url);
  return axios.post(url, params, {
    headers: headersApplicationJson,
  });
};
export const loginUser = (params) => {
  let url = `${API_ENDPOINT}/authentication/api/v1/token/`;
  return axios.post(url, params, {
    headers: headersApplicationJson,
  });
};
export const getAdsList = (params) => {
    let url = `${API_ENDPOINT}/order/api/v1/list-create-ads/`;
    return axios.get(url, {
      headers: headersApplicationJson,
    });
  };


  export const getNounce =()=>{
    let url = `${API_ENDPOINT}/authentication/api/v1/eth-nonce/`;
    return axios.get(url, {
      headers: headersApplicationJson,
    });

  }