import React from "react";
import "../Style/Buy.scss";

const BuyCart = (props) => {
  console.log("props", props);

  return (
    <>
      {props.user?.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="user-info">
              <img src={item.avatar} alt={item.name} />
              <div className="user-details">
                <div className="user-name">{item.name}</div>
                <div className="trades">
                  {item.trades} trades | Completion :{props?.user?.percentage}
                </div>
              </div>
            </div>
            <div className="details">
              <div className="rate">
                <div className="label">Rate:</div>
                <div className="value">₹{item.rate}</div>
              </div>
              <div className="usdt-amount">
                <div className="label">USDT Amount:</div>
                <div className="value">{item.usdtAmount} USDT</div>
              </div>
              <div className="limit">
                <div className="label">Limit:</div>
                <div className="value">{item.limit}</div>
              </div>
            </div>
            <div className="cta">
              <button className={props.button === "Sell Now" ? "danger" : ""}>
                {props.button}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BuyCart;
