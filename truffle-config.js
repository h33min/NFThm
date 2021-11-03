const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "basic senior canal exit spend dad typical crash raccoon sketch chaos slight";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },

    ropsten:{
      provider: function(){
        return new HDWalletProvider(
          mnemonic,'https://ropsten.infura.io/v3/62e07f4c99cb4c37b6bf5dc13df9109a'
        )
      },
        network_id:'3',

    }
  }
};
