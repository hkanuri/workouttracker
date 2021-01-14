const mongoose = require("mongoose");

function connectDb() {
    mongoose.connect("mongodb://localhost/workout", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(function () {
        console.log("Connected succesfully")

    }).catch(function (err) {
        console.log("Not connected")
    })
}

module.exports = connectDb;
