//Import Required Packages
const express = require('express');
const cors = require('cors');
require('dontenv').config();

// Create Express App
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Simple Test route 
app.get('/api/test',(req,res) => {
    res.json({messege: "Api is working!"})
});

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`)
});


