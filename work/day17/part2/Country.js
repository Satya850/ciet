const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose");
var Country = new Schema({
    username:{
        type: String
    },
    password:{
        type: String
    },
    date:{
        type: Number
        
    },
    address:{
        type:String
    }
})
Country.plugin(passportLocalMongoose);
module.exports = mongoose.model('Country',Country)