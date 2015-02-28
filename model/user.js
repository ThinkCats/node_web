/**
 * Created by wang on 15-2-4.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
    account:String,
    password:String
});

module.exports.userModel = mongoose.model('User',UserSchema);
