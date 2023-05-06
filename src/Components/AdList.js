import React, { useEffect, useRef, useState } from "react";
import ToastMsg from "../Common/ToastMsg";
import { getAdsList } from "../services/api";
import BuyCart from "./BuyCart";

const AdList = (props) => {
  const [isBuy, setisBuy] = useState(true);
  const sellAds = [
    {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      trades: 345,
      rate: 89.5,
      usdtAmount: 1000,
      limit: "₹100 - ₹5000",
      percentage: "99.2%",
    },
    {
      name: "Pramod ",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      trades: 345,
      rate: 89.5,
      usdtAmount: 1000,
      limit: "₹100 - ₹5000",
      percentage: "99.2%",
    },
    {
      name: "Vivek Sharma",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      trades: 345,
      rate: 89.5,
      usdtAmount: 1000,
      limit: "₹100 - ₹5000",
      percentage: "99.2%",
    },
    {
      name: "Alok Sharma",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      trades: 345,
      rate: 89.5,
      usdtAmount: 1000,
      limit: "₹100 - ₹5000",
      percentage: "99.2%",
    },
  ];
  const buyAds = [
    {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      trades: 345,
      rate: 91.5,
      usdtAmount: 1000,
      limit: "₹100 - ₹5000",
      percentage: "99.2%",
    },
    {
      name: "Pramod ",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      trades: 345,
      rate: 91.5,
      usdtAmount: 1000,
      limit: "₹100 - ₹5000",
      percentage: "99.2%",
    },
    {
      name: "Vivek Sharma",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      trades: 345,
      rate: 91.5,
      usdtAmount: 1000,
      limit: "₹100 - ₹5000",
      percentage: "99.2%",
    },
    {
      name: "Alok Sharma",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      trades: 345,
      rate: 91.5,
      usdtAmount: 1000,
      limit: "₹100 - ₹5000",
      percentage: "99.2%",
    },
  ];
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    handleAdsList();
  }, []);

  const handleAdsList = () => {
    getAdsList()
      .then((res) => {
        console.log("list", res.data);
      })
      .catch((err) => {
        let error = err?.response?.data?.detail || "something went wrong";

        ToastMsg(error, "error");
        alert(error);
      });
  };

  const handleCardSelection = (value) => {
    setisBuy(value);
  };

  return (
    <div>
      <div>
        <div className="menu">
          <span className="">Home</span>
          <span className="isbuy">Oders</span>
          <span className="isbuy">Ads</span>
          <span className="isbuy">Profile</span>
        </div>
        <div style={{ display: "flex" }}>
          <div className="ads">
            <span
              className={!isBuy ? "isbuy" : ""}
              onClick={() => handleCardSelection(true)}
            >
              Buy
            </span>
            |
            <span
              className={isBuy ? "isbuy" : ""}
              onClick={() => handleCardSelection(false)}
            >
              Sell
            </span>
          </div>
          <div className="create_add">
            <span
              className="create_ad"
              onClick={() => handleCardSelection(false)}
            >
              +
            </span>
          </div>
        </div>

        <BuyCart
          user={isBuy ? buyAds : sellAds}
          button={isBuy ? "Buy Now" : "Sell Now"}
        />
      </div>
    </div>
  );
};

export default AdList;
