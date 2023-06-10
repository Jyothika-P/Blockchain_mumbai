import React from "react";
import tick from '../src/images/tick.svg'
import './App4.css'

export default function App4() {

    return(
        <div className="connected-screen">
            <div className="connected-content">
                <img src={tick} alt="tick_img" className="tick"></img>
                <div className="confirmation-message1">Number linked to your wallet!</div>
                <div className="confirmation-message-sub1" style={{ marginBottom: 40}}>Your NFT number has been successfully linked to your wallet.</div>
                <div className="wallet-address" id="address" style={{textAlign: "center"}}>Here comes the mobile number <br></br> + <br></br> Here comes your address</div>
                <button className="send-btn">Start sending crypto</button>
            </div>
        </div>
    )
}