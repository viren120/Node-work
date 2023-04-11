var http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const hostname = '127.0.0.1';
const port = 8080;


const auth = (req , res, next) => {
  console.log(req.query);
  // it's check the password is valid or not
  // postman check all methods get , post , put , delete , patch 
  // url = http://127.0.0.1:8080?password=123
  // 
  if (req.query.password == '123') {
    next();
  } else {
    res.sendStatus(401);
  }
}
// 
//for all get,post--------------------------
app.use(auth);
app.get('/', (req, res) => {
  res.json({type : 'GET'});
});
// ------------------------------------------
// -----------OR part start -----------------
//for particular `-it's check the password for only fet request---------
// app.get('/', auth , (req, res) => {
//   res.json({type : 'GET'});
// });
// -----------OR part complete---------------
app.post('/', (req, res) => {
  res.json({type : 'POST'});
});
app.put('/', (req, res) => {
  res.json({type : 'PUT'});
});
app.delete('/', (req, res) => {
  res.json({type : 'DELETE'});
});
app.patch('/', (req, res) => {
  res.json({type : 'PATCH'});
});
app.all('*', (req, res) => {
  res.status(404).send(`<h1>Page Not Found`);
});

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`);
});
