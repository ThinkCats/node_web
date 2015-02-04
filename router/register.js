/**
 * Created by wang on 15-2-4.
 */
var User=require('../model/user');

module.exports.register=function(req,res){
    console.log('post body:'+req.body);
    var account=req.body.account;
    var password=req.body.password;
    var user=new User({
        account:account,
        password:password
    });
    user.save(function(err,user){
        if(err){
            console.log('save user error:'+err);
        }else{
            console.log('save success');
        }
    });
    console.log('account:'+account);
    console.log('password:'+password);
    res.end('reg success');
};