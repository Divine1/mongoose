const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//var uri = "mongodb://divine:123456@localhost/home";
var uri = "mongodb://localhost/mongo1";
var promise = mongoose.connect(uri);
mongoose.connection
.once("open",() => {
    console.log("MongoDB connected");
})
.on("error",(error) => {
    console.warn("MongoDB connection error ",error);
});


module.exports = {mongoose};