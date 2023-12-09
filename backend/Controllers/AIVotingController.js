const semaphoreIdentity = require("@semaphore-protocol/identity");
const semaphoreGroup = require("@semaphore-protocol/group")
const { generateProof } = require("@semaphore-protocol/proof");
const ethers = require("ethers");
const { daioABI } = require("../exports");
const { default: axios } = require("axios");

const aiVoting = async (req, res) => {
    try {
        const { userAddress, proposal_id, user_passwd, provider_network, proposal_statement } = req.body
        const signer = new ethers.Wallet("5a120bb123e259ca31e15ffd71b18a6753788c61242ca7adf4525b1d572efabc") // 0x3D591F4D9Bc89D59768da17A11c9a33b1c81e47A
        let provider;
        if (provider_network === "mumbai") {
            provider = new ethers.AlchemyProvider("maticmum", "rZC3EwTnyb4_nr9mH2wQJSk5goVHvVv0")
        } else if (provider_network === "scroll") {
            provider = new ethers.JsonRpcProvider("https://scroll-testnet-public.unifra.io/")
        } else if (provider_network === "base") {
            provider = new ethers.JsonRpcProvider("https://base-goerli.publicnode.com")
        }
        const connected_signer = signer.connect(provider)
        const contract = new ethers.Contract("0xf22d55bfFA001cb87c7bF3E74136FeAeb60989bA", daioABI, connected_signer)

        const combination_arg_identity = user_passwd + process.env.PASSWD_KEY
        const hashed_identity_arg = ethers.keccak256(ethers.toUtf8Bytes(combination_arg_identity))

        const grp_init = new semaphoreGroup.Group(proposal_id, 20)

        console.log("hashed identity - ", hashed_identity_arg)

        const identity = new semaphoreIdentity.Identity(hashed_identity_arg)

        // api call to fastapi service to get the feedback
        const get_predicted_sentiment_score = await axios.post("https://fast-api-mqpd.onrender.com/getPredictedValues", {
            proposal: proposal_statement
        })

        const full_proof = await generateProof(
            identity,
            grp_init,
            grp_init.root,
            (get_predicted_sentiment_score.data.feedback).toString(), // 0 or 1
            {
                zkeyFilePath: "./artifacts/semaphore.zkey",
                wasmFilePath: "./artifacts/semaphore.wasm"
            }
        )

        const tx = await contract.voteOnproposal(grp_init.id, full_proof.signal, full_proof.merkleTreeRoot, full_proof.nullifierHash, full_proof.externalNullifier, full_proof.proof)

        res.status(200).send("ZK PROOF SUBMITTED BY AI")


    } catch (error) {
        res.status(500).send("Did NOT call voteOnproposal cause a vote was already submitted before")
    }


}

module.exports = {
    aiVoting
}