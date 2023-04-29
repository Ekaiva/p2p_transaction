import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Common/Loader";
import "./App.css";
import "./style.scss";
import Layout from "./Layout";
import Header from "./Common/Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader loadingText="Loading..." />}>
        {" "}
        <Layout />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
