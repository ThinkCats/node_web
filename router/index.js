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
        if(req.session.user){
           res.end("You have logined");
        }else{
            res.render('login');
        }
    });

    app.get('/logout',function(req,res){
        req.session.destroy();
        res.end("logout success");
    });

	app.get('/hello/:user?',function(req,res){
        var option={
            username:''
        };
		if(req.session.user){
			//res.send('hello,'+req.params.user);
            option.username=req.session.user;
            res.render('user',option);
		}else{
            option.username='guest';
			res.render('user',option);
		}
	});

    app.post('/regaccount',register.register);
    app.post('/login',login.login);
	app.get('/api',api.api);
    sessions.session(app);
};
