import { ethers } from "hardhat";

async function main() {
  const Secreter = await ethers.getContractFactory("Secret");
  const secreter = await Secreter.deploy("Hello, Hardhat!");

  await secreter.deployed();

  console.log("Secreter deployed to:", secreter.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
