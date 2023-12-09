//importing modules
const bcrypt = require("bcrypt");
const db = require("../Models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

// Assigning users to the variable User
const Relayer = db.users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const addRelayer = async (req, res) => {
  try {
    const { Relayer_Address, Current_bal_eth } = req.body;
    //  console.log("adding user....",time);
    const data = {
      Relayer_Address: Relayer_Address,
      Current_bal_eth: Current_bal_eth,
    };

    //saving the user
    const relayer = await Relayer.create(data);

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (relayer) {
      //send users details
      return res.status(201).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

//login authentication

const getRelayer = async (req, res) => {
  try {
    const { Relayer_Address } = req.body;

    //find a user by their email
    const relayer = await Relayer.findOne({
      where: {
        Relayer_Address:Relayer_Address,
      },
    });
    console.log("data lofg", user);

    //if user email is found, compare password with bcrypt
    if (relayer) {
      //if password is the same

      return res.status(201).send(relayer);
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
 addRelayer,getRelayer
};
