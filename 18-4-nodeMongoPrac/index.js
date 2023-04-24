import bodyParser from 'body-parser';
import express from 'express';
import usersRouter from './routes/users.js';

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('hello from homepage');
});

app.listen(port, () => {
  console.log(`server is running at https://localhost:${port}`);
});

