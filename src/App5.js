import React from "react";
import u from '../src/images/u.svg'
import tele from '../src/images/telephone.svg'
import './App3.css'

export default function App5() {

    return(
        <div className="connected-screen">
            <div className="connected-content">
                <img src={u} alt="tick_img" className="tick"></img>
                <div className="mobile-heading" style={{textAlign: "center"}}>Start sending crypto</div>
                <div className="form">
                    <img className="tele-img" src={tele} alt="tele"></img>
                    <form><input type="tel" name="phone" pattern="[0-9]{10}" maxLength="10" inputMode="numeric" required placeholder="Enter reciever's number"></input></form>
                    <button className="proceed-button">Proceed</button>   
                </div>
            </div>
        </div>
    )
}