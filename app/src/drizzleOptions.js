import Web3 from "web3";
// import ComplexStorage from "./contracts/ComplexStorage.json";
// import SimpleStorage from "./contracts/SimpleStorage.json";
// import TutorialToken from "./contracts/TutorialToken.json";
import HMToken from "./contracts/HMToken.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("wss://ropsten.infura.io/ws/v3/62e07f4c99cb4c37b6bf5dc13df9109a"),

  },
  contracts: [HMToken],//, ComplexStorage, TutorialToken],
  events: {
    //SimpleStorage: ["StorageSet"],
  },
};

export default options;
