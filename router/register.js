/**
 * Created by wang on 15-2-4.
 */
module.exports.register=function(req,res){
    console.log('post body:'+req.body);
    var account=req.body.account;
    var password=req.body.password;
    console.log('account:'+account);
    console.log('password:'+password);
    res.end('reg success');
};