var api=require('./api');
var register=require('./register');
var login=require('./login');
var sessions=require('./session');

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
    app.get('/login',function(req,res){
        res.render('login');
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
    app.post('/login',login.login);
	app.get('/api',api.api);
    sessions.session(app);
};
