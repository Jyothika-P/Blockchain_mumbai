// /** @type import('hardhat/config').HardhatUserConfig */

// module.exports = {
//   solidity: "0.8.18",
// };
/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

//Exporting the API keys for deployment networks
const API_URL_MUMBAI = process.env.API_URL_MUMBAI;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_URL_MAINNET = process.env.API_URL_MAINNET;

//Deploying network export
module.exports = {
   solidity: "0.8.18",
   //Networks used for deployment
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: API_URL_MUMBAI,
         accounts: [`0x${PRIVATE_KEY}`],
         chainId: 80001,
      },
      polygon_mainnet : {
         url : API_URL_MAINNET,
         accounts : [`0x${PRIVATE_KEY}`],
         chainId : 137,
      },
   },
}