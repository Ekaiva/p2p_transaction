import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./Common/PageNotFound";
import AdList from "./Components/AdList";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import SetType from "./Components/SetType";
import SetTotal from "./Components/SetTotal";

const Layout = () => {
  return (
      
    <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/ads" element={<AdList/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/set-type" element={<SetType/>}/>
          <Route path="/set-total" element={<SetTotal/>}/>
          <Route path="/404" element={<PageNotFound/>}/>
         <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default Layout
