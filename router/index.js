var api=require('./api');
var route=require('express').Router();
module.exports.app = function(app){
	app.get('/',function(req,res){
        res.render('index');
	});
    app.get('/reg',function(req,res){
        res.render('register');
    });
	app.get('/about',function(req,res){
        res.render('about');
	});
	app.get('/hello/:user?',function(req,res){
		if(req.params.user){
			//res.send('hello,'+req.params.user);
            var username=req.params.user;
            console.log(username);
            //assign a variable
            var option={
                username:req.params.user
            }
            res.render('user',option);
		}else{
			res.send('ni hao,guest');
		}
	});
    app.post('/regaccount',function(req,res){
        console.log('post body:'+req.body);
        var account=req.body.account;
        var password=req.body.password;
        console.log('account:'+account);
        console.log('password:'+password);
        res.end('reg success');
    });
	app.get('/api',api.api);
};
