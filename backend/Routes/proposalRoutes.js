const express = require('express')
const { getProposal, addProposal } = require('../Controllers/ProposalController');

const router =  express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/add',addProposal);
router.post('/get',getProposal);

module.exports = router;