import React from 'react';
import { FaQuestionCircle } from "react-icons/fa";

const SetTotal = () => {
  return (
    <>
        <div className="sub-header">
            <h2>Post Normal Ads</h2>
        </div>
       <div className='container'>
        
        <p className='text-center color-white'>Set Type & Price</p>
            <div className='timeline'>
                <ul class="base-timeline">
                    <li class="base-timeline__item base-timeline__item--active"></li>
                    <li class="base-timeline__item base-timeline__item--active"></li>
                    <li class="base-timeline__item"></li>
                </ul>
            </div>
            <div class="tabs">
                <div class="tab">
                    <div className='tab-inner'>
                        <div className='select-wrapper input-main-wrapper'>
                            <div className='input-wrapper left'>
                                <label for="asset">Total Amount</label>
                                <input type='number'/>
                                <span className='custom-placeholder'>USDT</span>
                            </div>
                        </div>
                        <div className='select-wrapper flex align-center'>
                            <div className='input-wrapper left'>
                                <label for="order">Order Limit</label>
                                <input type='number'/>
                                <span className='custom-placeholder'>INR</span>
                            </div>
                            <div style={{margin:"0px 20px"}}>
                                <span style={{height:"25px"}}></span>
                                <span className="color-white"> ~ </span>
                            </div>
                            <div className='input-wrapper right'>
                                <label for="fiat" style={{height:"15px"}}></label>
                                <input type='number'/>
                                <span className='custom-placeholder'>INR</span>
                            </div>
                        </div>
                        <div className='select-wrapper input-main-wrapper flex flex-column' style={{marginTop:"16px"}}>
                            <div className='input-wrapper left'>
                                <label for="order">Payment Method<br/>Select up to 5 methods</label>
                                <button type="submit">+  ADD</button>
                            </div>
                            <div className='input-wrapper right'>
                                <label for="fiat">Payment Time Limit</label>
                                <select name="asset" id="asset" >
                                    <option value="15 min">15 min</option>
                                    <option value="30 min">30 min</option>
                                    <option value="45 min">45 min</option>
                                    <option value="1 hr">1 hr</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="set-footer"><FaQuestionCircle />&nbsp;&nbsp;Help & Guide</div>
            <div className="footer-btn">
                <div className="footer-btn-inner flex align-center space-between">
                    <button type="submit">Previous</button>&nbsp;&nbsp;
                    <button type="submit">Next</button>
                </div>
            </div>
       </div>
    </>
  )
}

export default SetTotal