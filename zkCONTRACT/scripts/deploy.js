const hre = require("hardhat");

require("dotenv").config()
async function main() {

  const _semaphoreAddress = "0x74Cd45F69d0eE2aBad147bbD882f33b72992D872";
  const lock = await hre.ethers.deployContract("zXDAO", [
    _semaphoreAddress,
  ]);

  await lock.waitForDeployment();

  console.log(lock);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
