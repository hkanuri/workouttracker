const mongoose = require("mongoose");

function connectDb() {
    mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/workout", 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }).then(function () {
        console.log("Connected succesfully")

    }).catch(function (err) {
        console.log("Not connected")
    })
}

module.exports = connectDb;
