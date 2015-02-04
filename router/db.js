/**
 * Created by wang on 15-2-4.
 */
var mongoose=require('mongoose');
module.exports.connects=function(){
    mongoose.connect('mongodb://localhost/myweb');
    var dbs=mongoose.connection;
    dbs.on('error',function(err){
        if(err){
            console.log('ERROR MSG:'+err);
        }
    });
    dbs.on('open',function(){
        console.log('db has been connected');
    });
};

