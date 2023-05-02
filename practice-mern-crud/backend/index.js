const express = require('express');
const app = express();

const cors = require('cors');
const mongoose  = require('mongoose');

const port = 8000 ;
app.use(cors({
    origin : '*'
}))
 
app.get('/',(req,res)=>{
    res.status(200).json(`heelo`);
})

const post_route_App = require('./routes/postRoutes');
app.use('/api' , post_route_App);

mongoose
  .connect(
    'mongodb+srv://virenp:viren1T&P@cluster0.vvlbqs6.mongodb.net/practice-mern-crud'
  )
  .then(() => {
    console.log(`mongoDB Connected!..`);
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('mongoose connect catch error', error);
  });
