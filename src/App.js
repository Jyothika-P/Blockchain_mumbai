import logo from "./logo.svg";
import "./App.css";
import ellipse from "./images/ellipse.png";
import iphone from "./images/iphone.png";
import border from "./images/border.png";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
// import { MetaMaskInpageProvider } from '@metamask/providers';
// const ethereum = window.ethereum as MetaMaskInpageProvider;

let accounts = [];
function App() {
  
  return (
    <div className="App">
      <div className="App-header">
        <p className="heading">
          Your Web3
          <br /> Mobile Number
        </p>
        <div className="sub-heading">Join the revolution of seamless web3 communication</div>
        <div className="connect">
          <button className="connect-text" onClick={getAccount}>
            Connect Metamask wallet
          </button>
        </div>
        <div className="bottompart">
          <img className="ellipse" src={ellipse} alt="img"></img>
          <div className="mobile" style={{ backgroundImage: `url(${border})` }}>
            <img classname="iphone" src={iphone} alt="img"></img>
            {/* <img classname="border" src={border}></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}
async function getAccount() {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x13881' }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x13881',
              chainName: 'Polygon Testnet',
              rpcUrls: [' https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d '] /* ... */,
            },
          ],
        });
      } catch (addError) {
        throw("Not working");
      }
    }
    // handle other "switch" errors
  }
  accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
  .catch((err) => {
    if(err.code == 4001) {
        console.log("COonnect metamask");
    } else {
        console.log(err);
    }
  }
  );
  console.log(accounts[0]);
}
export default App;
