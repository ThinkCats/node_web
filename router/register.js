/**
 * Created by wang on 15-2-4.
 */
var UserModel=require('../model/user').userModel;

module.exports.register=function(req,res){
    console.log('post body:'+req.body);
    var account=req.body.account;
    var password=req.body.password;
    var user=new UserModel({
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