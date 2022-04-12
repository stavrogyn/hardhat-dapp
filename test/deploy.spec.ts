import { expect } from "chai";
import { ethers } from "hardhat";

describe("Secreter", () => {
  it("Should return the new secret once it's changed", async function () {
    const Secreter = await ethers.getContractFactory("Secret");
    const secreter = await Secreter.deploy("Chshshshsh...");

    expect(await secreter.getSecret()).to.equal("Chshshshsh...");
  });
});
