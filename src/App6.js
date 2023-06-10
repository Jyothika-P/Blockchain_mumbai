import React from "react";
import arrow from './images/arrow.svg'
import './App6.css'

export default function App6() {
    return(
        <div className="transfer-screen">
            <div className="transfer-content">
                <img src={arrow} alt="tick_img" className="tick"></img>
                <div className="transfer-heading">Send Crypto to</div>
                <div className="transfer-number">IMPORT NUMBER</div>
                <div className="wallet-container">Metamask wallet<br></br><span style={{color: "#739EFC"}}>ADDRESS</span></div>
                <div className="transfer-selector">
                    <div className="currency"><span style={{color: "white", fontWeight: 500}}>Select currency</span>
                        <select>
                            <option>USDC</option>
                        </select>
                    </div>
                    <div className="blockchain"><span style={{color: "white", fontWeight: 500}}>Select blockchain</span>
                        <select>
                            <option>Polygon</option>
                        </select>
                    </div>
                    <div className="amount"><span style={{color: "white", fontWeight: 500}}>Enter amount</span>
                        <input type="number" placeholder="0.00"></input>
                    </div>
                </div>
                <div className="transaction">
                    <button className="confirm-btn">Confirm transaction</button>
                </div>
            </div>
        </div>
    )
}