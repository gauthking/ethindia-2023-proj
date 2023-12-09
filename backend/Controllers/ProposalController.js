//importing modules
const bcrypt = require("bcrypt");
const db = require("../Models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");




// Assigning users to the variable User
const Proposal = db.users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const addProposal = async (req, res) => {
  try {
    const { group_id,group_proposal_statement,no_of_voters} = req.body;
    //  console.log("adding user....",time);
    const data = { group_id:group_id,group_proposal_statement:group_proposal_statement,no_of_voters:no_of_voters};

    //saving the user
    const proposal = await Proposal.create(data);

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (proposal) {
      //send users details
      return res.status(201).send(proposal);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

//login authentication

const getProposal = async (req, res) => {
  try {
    const { group_id } = req.body;

    //find a user by their email
    const proposal = await Proposal.findOne({
      where: {
        group_id:group_id,
      },
    });

    //if user email is found, compare password with bcrypt
    if (proposal) {
      //if password is the same

      return res.status(201).send(proposal);
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
 addProposal,getProposal
};
