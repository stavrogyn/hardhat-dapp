import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld", () => {
  it("Should return the new message once it's changed", async function () {
    const Messager = await ethers.getContractFactory("HelloWorld");
    const messager = await Messager.deploy("Chshshshsh...");

    expect(await messager.getMessage()).to.equal("Chshshshsh...");
  });
});
