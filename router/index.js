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
			res.send('hello,'+req.params.user);
		}else{
			res.send('ni hao,guest');
		}
	});
	app.get('/api',api.api);
};
