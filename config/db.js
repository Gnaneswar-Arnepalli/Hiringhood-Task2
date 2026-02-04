const mongoose = require("mongoose");

const connectDB = async() => {

    try{
         console.log("Connecting to:", process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("MongoDB has been connected successfully...😊")
    }catch(error){
        console.error("MonogoDB was not connected check properly", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;