const express = require('express');

const MensRanking = require("./src/models/mens")
require('./src/db/conn');
const app  = express();
const port = process.env.PORT || 8080 ;

// we will handle post req
app.post('')
app.get('/' , async(req,res)=>{
    res.send("hello ")
})
app.listen(port , ()=> {
    console.log(`conected to port http://localhost:${port}`);
})