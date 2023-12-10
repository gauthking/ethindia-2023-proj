require("dotenv").config();
const { ethers } = require("hardhat");
const { abi } = require("../artifacts/contracts/DAIO.sol/DAiO.json");
const semaphore = require("@semaphore-protocol/identity");
const { hashMessage } = require("ethers");
async function caller() {
  const signer = new ethers.Wallet(
    ""
  );
  const provider = new ethers.AlchemyProvider(
    "maticmum",
    "rZC3EwTnyb4_nr9mH2wQJSk5goVHvVv0"
  );

  const n_signer = signer.connect(provider);

  const contract = new ethers.Contract(
    "0x2cf527D7c7A5d660F90E2cFe0AF7EbCE1C806325",
    abi,
    n_signer
  );

  const message = "Let's verify the signature of this message";
  const signMessage = await n_signer.signMessage(message);
  const verifySigner = ethers.recoverAddress(hashMessage(message), signMessage);
  var check = 0;
  if (verifySigner === signer.address) {
    const { trapdoor, nullifier, commitment } = new semaphore.Identity(
        password
    );
    console.log("Trapdoor:", trapdoor);
    console.log("Nullifier:", nullifier);
    console.log("Commitment:", commitment);

    console.log(
      await contract.joinGroup("8113", commitment)
    );
  }

    try {
      console.log("Success! The message: " +message+" was signed with the signature: " +await signMessage);
      console.log("The signer was: " +await messageSigner);
    } catch (err) {
      console.log("Something went wrong while verifying your message signature: " + err);
    }
}

caller();
