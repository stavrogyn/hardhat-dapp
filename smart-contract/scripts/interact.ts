import { ethers } from "hardhat";

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const {
  API_KEY,
  PRIVATE_KEY,
  DEPLOYED_CONTRACT_ADDRESS
} = process.env

const alchemyProvider = new ethers.providers.AlchemyProvider("ropsten", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY!, alchemyProvider);

const helloWorldContract = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS!, contract.abi, signer);

/**
 * For debugging purposes, you can use the following code to get the current address of the contract
 * @code console.log(await alchemyProvider.getCode(DEPLOYED_CONTRACT_ADDRESS!))
 */

async function main() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);

  console.log("Updating the message...");
  const tx = await helloWorldContract.update("THIS IS ALREADY ANOTHER MESSAGE");
  await tx.wait();

  const newMessage = await helloWorldContract.message();
  console.log("The new message is: " + newMessage);
}

main();
