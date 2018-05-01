const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    name:{
        type : String,
        required: true
    },
    city:{
        type:String,
        required: false,
        default : null
    },
    type :{
        type:String,
        default:null
    }
});

const School = mongoose.model("School",SchoolSchema);

module.exports = School;