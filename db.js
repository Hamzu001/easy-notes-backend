const mongoose = require('mongoose');
const mongoURI = process.env.DB;
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connect to mongoose succesfully");
    })
}
module.exports = connectToMongo;