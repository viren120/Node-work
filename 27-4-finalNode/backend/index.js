const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

const port = 8080 ;

app.use(cors({
    origin : '*'
}))

app.get('/',(req,res)=>{
    res.status(200).json(`hello from homepage`)
})

const post = require('./routes/postRoutes');
app.use('/api', post); 

mongoose
  .connect(
    'mongodb+srv://virenp:viren1T&P@cluster0.vvlbqs6.mongodb.net/finalNode'
  )
  .then(() => {
    console.log(`mongoDB is connected...`);
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(`mongoDB not connected..`, error);
  });

