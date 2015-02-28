/**
 * Created by wang on 15-2-4.
 */
var UserModel=require('../model/user').userModel;
module.exports.login=function(req,res){
    var account=req.body.account;
    var password=req.body.password;
    var user={
        account:account,
        password:password
    };

    UserModel.findOne(user,function(err,result){
        console.log(result);
       if(result){
           console.log('login success');
           //add session
           req.session.user=user.account;
           res.end('login success');
       }else{
           console.log("Error username or password");
           res.end('Error username or password');
       }
    });
};
