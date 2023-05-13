import React, {useState} from "react";
import { FaQuestionCircle } from "react-icons/fa";

const SetType = () => {
    let [num, setNum]= useState(0);
    let incNum =()=>{
        if(num<10)
        {
        setNum(Number(num)+1);
        }
    };
    let decNum = () => {
        if(num>0)
        {
        setNum(num - 1);
        }
    }
    let handleChange = (e)=>{
    setNum(e.target.value);
    }
  return (
    <>
       <div className='container'>
        <p className='text-center'>Set Type & Price</p>
            <div className='timeline'>
                <ul class="base-timeline">
                    <li class="base-timeline__item base-timeline__item--active"></li>
                    <li class="base-timeline__item"></li>
                    <li class="base-timeline__item"></li>
                </ul>
            </div>
            <div class="tabs">
                <div id="tab2" class="tab">
                    <ul class="nav nav-tabs">
                    <li><a href="#tab1">I want to sell</a></li>
                    <li className='active'><a href="#tab2">I want to buy</a></li>
                    </ul>
                    <div className='tab-inner'>Inner 2</div>
                </div>
                <div id="tab1" class="tab">
                    <ul class="nav nav-tabs">
                    <li className='active'><a href="#tab1">I want to sell</a></li>
                    <li><a href="#tab2">I want to buy</a></li>
                    </ul>
                    <div className='tab-inner'>
                        <div className='select-wrapper flex align-center'>
                            <div className='input-wrapper left'>
                                <label for="asset">Asset</label>
                                <select name="asset" id="asset" >
                                    <option value="USDT">USDT</option>
                                    <option value="BTC">BTC</option>
                                    <option value="BUSD">BUSD</option>
                                    <option value="BNB">BNB</option>
                                </select>
                            </div>
                            <div style={{margin:"0px 20px"}}>
                                <span style={{height:"25px"}}></span>
                                <span>&#10132;</span>
                            </div>
                            <div className='input-wrapper right'>
                                <label for="fiat">With Fiat</label>
                                <select name="fiat" id="fiat" >
                                    <option value="JPY">JPY</option>
                                    <option value="KES">KES</option>
                                    <option value="LKR">LKR</option>
                                    <option value="NGN">NGN</option>
                                </select>
                            </div>
                        </div>
                        <div className='price-wrapper flex align-center'>
                            <div className='price'>
                                <span>Your Price</span>
                                <span>₹ 82.04</span>
                            </div>
                            <div className='price'>
                                <span>Highest Order Price</span>
                                <span>₹ 82.04</span>
                            </div>
                        </div>
                        <div className='price-type'>
                            <div className='price'>
                                <span>Price Type</span>     
                            </div>
                            <div className='price flex'>
                                <span><input type='radio'/>&nbsp;&nbsp;Fixed</span>
                                <span><input type='radio'/>&nbsp;&nbsp;Floating</span>
                            </div>
                        </div>
                        <div className='price-type'>
                            <div className='price'>
                                <span>Fixed</span>     
                            </div>
                            <div className='price flex'>
                                <div class="input-group flex align-center">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                    </div>
                                    <input type="text" class="form-control" value={num} onChange={handleChange} style={{textAlign:"center"}}/>
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="set-footer"><FaQuestionCircle />&nbsp;&nbsp;Help & Guide</div>
            <div className="footer-btn">
                <div className="footer-btn-inner">
                    <button type="submit">Next</button>
                </div>
            </div>
       </div>
    </>
  )
}

export default SetType