//importing modules
const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./Models')
const userRoutes = require('./Routes/userRoutes')
const relayerRoutes = require('./Routes/relayerRoutes')
const proposalRoutes = require('./Routes/proposalRoutes')
const proposalVoteRoutes = require('./Routes/proposalVoteRoutes')


//setting up your port
const PORT = process.env.PORT || 8080;

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
  
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
db.sequelize.sync({force:false}).then(()=>{
    console.log('db in sync...');
})

app.use('/api/users',userRoutes);
app.use('/api/relayers',relayerRoutes);
app.use('/api/proposals',proposalRoutes);
app.use('/api/proposalvotes',proposalVoteRoutes);



//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))