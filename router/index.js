var api=require('./api');
module.exports = function(app){
	app.get('/',function(req,res){
		res.send('Hello, This is a router page');
	});
	app.get('/about',function(req,res){
		res.send('Welcome about pagessss');
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
