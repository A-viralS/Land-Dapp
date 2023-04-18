
const hre = require("hardhat");

async function main() {

  const Land = await hre.ethers.getContractFactory("LandRegistrationSystem"); //fetching bytecode and ABI 
  const land = await Land.deploy(); // creating Instance of our Smart Contract,

  await land.deployed();// Deploying your Smart Contract

  console.log("Delpoyed Contract to : ", `${land.address}`);//fetching  Smart contract address
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0x9C548a28c9BD60594F0FE095EAb010859Efe546B