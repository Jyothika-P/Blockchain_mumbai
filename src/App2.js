import React from "react";
import tick from './images/tick.svg'
import './App2.css'

export default function App2() {
    return(
        <div className="connected-screen">
            <div className="connected-content">
                <img src={tick} alt="tick_img" className="tick"></img>
                <div className="confirmation-message">Wallet Connected!</div>
                <div className="confirmation-message-sub">Your wallet has been successfully connected</div>
                <div className="wallet-address" id="address">Here comes the walet address!</div>
                <button className="proceed-btn">Proceed</button>
            </div>
        </div>
    )
}