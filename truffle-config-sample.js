RPC_NODES = {
    "mumbai" : "",
    "bsc-testnet": "",
    "moonbeam-testnet":"",
    "polygon":"",
    "bsc":"",
    "avax":"",
    "moonbeam":"",
    "moonriver":"",
  }
  
  
  const fs = require('fs');
  const HDWalletProvider = require('@truffle/hdwallet-provider');
  const path = require('path')
  //const privateKey = fs.readFileSync(".secret").toString().trim();
  //var provider = new HDWalletProvider(privateKey, RPC_NODES["mumbai"][0])
  
  module.exports = {
    contracts_build_directory: path.join(__dirname, "client/src/contracts"),
    networks: {
      development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 8545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
      },
      mumbai: {
        provider: provider,
        network_id: 80001,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      },
    },
    // Set default mocha options here, use special reporters etc.
    mocha: {
      // timeout: 100000
    },
    // Configure your compilers
    compilers: {
      solc: {
        version: "0.8.6",    // Fetch exact version from solc-bin (default: truffle's version)
      }
    },
    db: {
      enabled: false
    },
    plugins: ['truffle-plugin-verify'],
    api_keys:{
        etherscan: '',
        optimistic_etherscan: '',
        arbiscan: '',
        bscscan: '',
        snowtrace: '',
        polygonscan: '',
        ftmscan: '',
        hecoinfo: '',
        moonscan: ''
    }
  
  };
  