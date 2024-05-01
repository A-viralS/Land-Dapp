require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = 'https://eth-sepolia.g.alchemy.com/v2/VNZwbw8EPznsJTEGk6gJy-R-Bk9mDOy-'
const PRIVATE_KEY = 'cf8ede9b31b549700f4f5a52aeb6cbe2de1eec038681d32e7e8182f8b36828cc';
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
  networks: {
    hardhat:{
      chainId: 11155111
    },
    goerli: {
      url: GOERLI_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    
  },
};