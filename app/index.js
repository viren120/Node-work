var http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const hostname = '127.0.0.1';
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, './home.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './about.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, './contact.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './login.html'));
});

app.all('*', (req, res) => {
  res.status(404).send(`<h1>Page Not Found`);
});

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`);
});
