const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = "mongodb+srv://prapti123:prapti@cluster0.lcbuk.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected")
    })
}

module.exports = connectToMongo;
