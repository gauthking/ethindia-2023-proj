const express = require('express')
const { addProposalVote, getProposalVote } = require('../Controllers/ProposalVote');

const router =  express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/add',addProposalVote);
router.post('/get',getProposalVote);

module.exports = router;