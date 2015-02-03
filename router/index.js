var api=require('./api');
module.exports.app = function(app){
	app.get('/',function(req,res){
        res.render('index');
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
	app.get('/api',api.api);
};
