require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox");
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts

module.exports = {
  solidity: "0.8.9",
  networks: {
    matic: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${process.env.MATIC_PRIVATE_KEY}`],
    },
  },
};
