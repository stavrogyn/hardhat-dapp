import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", () => {
  it("Should return the new greeting once it's changed", async function () {
    const Secreter = await ethers.getContractFactory("Secreter");
    const secreter = await Secreter.deploy("Chshshshsh...");
    await secreter.deployed();

    expect(await secreter.greet()).to.equal("Chshshshsh...");
  });
});
