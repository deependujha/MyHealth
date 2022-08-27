// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  const hospitalOrg = "0x2b8535524cb3381071590378973d2fa627ea933d";
  const defenceOrg = "0xaf0f5f9d645cb00622f87fb6fc6f9970364aea48";
  const insuranceOrg = "0x3cd2b592b9f30721050c4e0ac3a9c0fc89252128";
  const dataAnalyticsOrg = "0xb7dcef078e52950d64efdfc8a19945f84f90a256";

  const MyHealth = await hre.ethers.getContractFactory("MyHealth");
  const myHealth = await MyHealth.deploy(
    hospitalOrg,
    defenceOrg,
    insuranceOrg,
    dataAnalyticsOrg
  );

  await myHealth.deployed();

  console.log(
    `MyHealth contract deployed on the polygon blockchain. Address: ${myHealth.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
