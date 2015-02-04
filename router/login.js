/**
 * Created by wang on 15-2-4.
 */
var User=require('../model/user');
module.exports.login=function(req,res){
    var account=req.body.account;
    var password=req.body.password;
    var user=new User({
        account:account,
        password:password
    });
    User.find(user,function(err,docs){
       if(err){
           console.log('query data error:'+err);
       } else{
           console.log('login success');
           res.end('login success');
       }
    });
};
