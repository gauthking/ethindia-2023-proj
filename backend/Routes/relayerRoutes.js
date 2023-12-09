const express = require('express')

const { addRelayer, getRelayer } = require('../Controllers/RelayerController');

const router =  express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/add',addRelayer);
router.post('/get',getRelayer);

module.exports = router