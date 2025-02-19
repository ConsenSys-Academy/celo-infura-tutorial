var HDWalletProvider = require("truffle-hdwallet-provider");
const PrivateKeyProvider = require("truffle-privatekey-provider");
require("dotenv").config();

// const { INFURA_API_KEY, PRIVATE_KEY } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a managed Ganache instance for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    alfajores: {
      network_id: 44787,
      provider: () =>
        new PrivateKeyProvider(
          PRIVATE_KEY,
          `https://celo-alfajores.infura.io/v3/${INFURA_API_KEY}`, 
        ),5d64b4ab7dcc41e0b36ba0d21c4cda51
    },
    celoMainnet: {
      network_id: 42220,
      provider: () =>
        new PrivateKeyProvider(
          PRIVATE_KEY,
          `https://celo-mainnet.infura.io/v3/${INFURA_API_KEY}`
        ),
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
