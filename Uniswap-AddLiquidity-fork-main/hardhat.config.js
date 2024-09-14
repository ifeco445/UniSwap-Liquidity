require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 2000,
        },
      }
    },
    ]
  },
  networks: {
hardhat: {
  forking: {
    url: "https://eth-mainnet.g.alchemy.com/v2/_WK382c7iji7JT7ale63odCUJwv_gMoH",
       blockNumber: 20000000
  }
}
  },
};
