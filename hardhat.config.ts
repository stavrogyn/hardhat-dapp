import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";


dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {},
    ropsten: {
      url: process.env.API_URL || "",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;
