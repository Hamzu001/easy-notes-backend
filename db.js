const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/Hamza";
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connect to mongoose succesfully");
    })
}
module.exports = connectToMongo;