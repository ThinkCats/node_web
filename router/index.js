var api=require('./api');
var register=require('./register');

module.exports.index = function(app){
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
            var option={
                username:req.params.user
            };
            res.render('user',option);
		}else{
			res.send('ni hao,guest');
		}
	});

    app.post('/regaccount',register.register);
	app.get('/api',api.api);
};
