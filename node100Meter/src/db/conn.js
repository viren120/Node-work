const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/100Meter ", {
    useCreateIndex : true ,
    useNewUrlParser : true ,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connection Successful');
}).catch(()=> {
    console.log('No Connection');
})