require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
      blockConfirmations: 6,
      chainId: 80001,
    },
    scrollSepolia: {
      url: "https://scroll-testnet-public.unifra.io",
      chainId: 534351,
      accounts: [process.env.PRIVATE_KEY],
    },
    baseGoerli: {
      url: "https://base-goerli.publicnode.com",
      chainId: 84531,
      accounts: [process.env.PRIVATE_KEY],
    },
    polyzkEVM: {
      url: "https://rpc.public.zkevm-test.net",
      chainId: 1442,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "HCWYWD65RIXPZHT7W72T3TF3649USY9W56",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
