import React from "react";
import tick from '../src/images/tick.svg'
import './App7.css'

export default function App2() {
    return(
        <div className="final-screen">
            <div className="final-content">
                <img src={tick} alt="tick_img" className="tick"></img>
                <div className="final-message">Transcation completed!</div>
                <div className="final-message-sub">You have successfully sent $100 USDC to <span style={{color: "#5D8EFB"}}> NUMBER </span></div>
                
                <button className="proceed-btn">Send Transcation As Text To Recipient</button>
            </div>
        </div>
    )
}