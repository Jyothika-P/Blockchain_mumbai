# ULTIMATE DIGITS

# Table of Contents

- [Description](#description)
-[Key Features](#key-features)
- [Installation](#installation)
- [Getting Started](#getting-started)

## Description

Bringing together the worlds of conventional phone numbers and decentralized currency, "Ultimate Digits" is a ground-breaking 
initiative. The "Ultimate Digits" feature of MetaMask allows you to easily 
connect your phone number to your wallet address, opening up a plethora of opportunities for you in the cryptocurrency market.


## Key Features

- **Seamless Integration:** In just a few minutes, easily link your phone number to the address of your MetaMask wallet without 
compromising your privacy or security.
- **User-Friendly Interface:** Take advantage of a streamlined and easy-to-understand user interface that makes it quicker and 
less complicated to connect your phone number to your MetaMask wallet.
- **Universal Compatibility:** "Ultimate Digits" works without any issues with any blockchain that is supported by MetaMask. 
Currently, it runs on the Polygon network only.
- **Secure Transactions:** Conduct secure transactions and interact with dApps using the phone number that has been validated for 
your account, adding an additional layer of security to your digital 
assets.

#
## Installation

To install the necessary dependencies, run the following command:
- *npm install*
To run the React App, use the following command inside the frontend/web folder :
- *npm start*

Follow these steps to deploy your contract on the desired network:

1. Run the command in the terminal to deploy the contract and obtain the contract address after deployment:
  - *npx hardhat run scripts/deploy.js --network polygon_mumbai*
  - *npx hardhat run scripts/deploy.js --network polygon_mainnet*
2. Replace the obtained contract address in the `config.json` file.

Ensure that you enter the private key of your MetaMask account in the `.env` file to deploy the contract on the desired network. 
Make sure that there is enough matic in the account to cover the 
deployment charges (gas price).

To compile your smart contract, use the following command:
- *npx hardhat compile*

For the API keys used in deploying the contract, change them accordingly.

## Getting Started

To get started with the real estate platform, follow these steps:

1. Clone this repository.
2. Install the necessary dependencies for the smart contract and web application.
3. Configure the blockchain platform and deploy the smart contract.
4. Configure the payment system and integrate it into the web application.
5. Test the system to ensure that it functions as expected.
6. Deploy the system to a production environment.



