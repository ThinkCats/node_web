var express=require('express');
var routes=require('./router');
var app=express();

// template ( use jade)
app.set('view engine','jade');
app.set('views',__dirname+'/public');

routes.app(app);

app.listen(3000);

console.log('server has started...');
