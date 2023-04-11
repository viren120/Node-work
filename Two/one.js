var http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const hostname = '127.0.0.1';
const port = 8080 ;
// --------static text show with the use of express------------------------------------
// app.get('/' , (req, res)=>{
//   res.send('This....');
// })
// --------static file show with the use of express------------------------------------
app.get('/' , (req , res) => {
  res.sendFile(path.join(__dirname , './index1.html'));
})

app.all('*' , (req , res)=>{
  res.status(404).send(`<h1>Page Not Found`);
})

app.listen(port,hostname , () =>{
  console.log(`http://${hostname}:${port}`);
});