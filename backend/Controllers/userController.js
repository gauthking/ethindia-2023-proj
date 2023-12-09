//importing modules
const db = require("../Models");

// Assigning users to the variable User
const User = db.users;
const crypto = require('crypto');
//signing a user up
//hashing users password before its saved to the database with bcrypt
const addUser = async (req, res) => {
  try {
    const {
      user_address,
      user_characteristics_beh_df,
      password
    } = req.body;
    //  console.log("adding user....",time);
    const cipher = crypto.createCipher('aes-256-cbc', process.env.KEY);
    let encryptedData = cipher.update(password, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    const data = {
      user_address: user_address,
      user_characteristics_beh_df: user_characteristics_beh_df,
      joined_groups: [],
      password: password
    };

    //saving the user
    const user = await User.create(data);

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (user) {



      //send users details
      return res.status(201).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

const addUserToProposal = async (req, res) => {
  try {
    const {
      user_address,
      proposal_id
    } = req.body;
    //  console.log("adding user....",time);


    //saving the user
    const user = await User.findOne({
      where: {
        user_address: user_address,
      },
    });

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (user) {

      user.joined_groups.push(proposal_id);
      await user.save();

      //send users details
      return res.status(201).send('OK');
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};



//login authentication

const getuser = async (req, res) => {
  try {
    const { user_address } = req.body;

    //find a user by their email
    const user = await User.findOne({
      where: {
        user_address: user_address,
      },
    });
    // console.log("data lofg", user);

    //if user email is found, compare password with bcrypt
    if (user) {

      //if password is the same

      return res.status(201).send(user);

    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addUser, getuser, addUserToProposal
};
