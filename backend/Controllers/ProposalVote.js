//importing modules
const bcrypt = require("bcrypt");
const db = require("../Models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

// Assigning users to the variable User
const ProposalVote = db.users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const addProposalVote = async (req, res) => {
  try {
    const { voted_id, voted_to, zk_proof_submitted, voted_by } = req.body;
    //  console.log("adding user....",time);
    const data = {
      voted_id: voted_id,
      voted_to: voted_to,
      zk_proof_submitted:zk_proof_submitted,
      voted_by:voted_by,
    };

    //saving the user
    const proposalVote = await ProposalVote.create(data);

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (proposalVote) {
      //send users details
      return res.status(201).send(proposalVote);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

//login authentication

const getProposalVote = async (req, res) => {
  try {
    const { voted_id } = req.body;

    //find a user by their email
    const proposalVote = await ProposalVote.findOne({
      where: {
        voted_id: voted_id,
      },
    });

    //if user email is found, compare password with bcrypt
    if (proposalVote) {
      //if password is the same

      return res.status(201).send(proposalVote);
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addProposalVote,
  getProposalVote,
};
