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

// const { API_URL, PRIVATE_KEY } = process.env;
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
   solidity: "0.8.18",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         chainId: 80001,
      }
   },
}