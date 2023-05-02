const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

const port = 8080 ;

app.use(cors({
    origin: '*'
}))
app.get('/', (req,res) => {
    res.status(200).json('helloooooo');
})

const post_route_App = require('./routes/postRoute');
app.use('/api',post_route_App); 

mongoose
  .connect(
    'mongodb+srv://virenp:viren1T&P@cluster0.vvlbqs6.mongodb.net/mern-crud'
  )
  .then(() => {
    console.log('connected to MongoDB!!');
    app.listen(port, () => {
      console.log(`conected to port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('mongoose connect catch error', error);
  });