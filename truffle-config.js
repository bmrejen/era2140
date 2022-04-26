import HDWalletProvider from "@truffle/hdwallet-provider"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "5777"
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY
        ),
      gasPrice: 10000000000,
      network_id: 3
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.13" // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
