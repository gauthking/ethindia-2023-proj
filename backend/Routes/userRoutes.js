const express = require('express')
const userController = require('../Controllers/userController')
const { addUser,getuser ,addUserToProposal} = userController

const router =  express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/add', addUser)
router.post('/addUserToProposal', addUserToProposal )

//login route
router.post('/get', getuser )

module.exports = router