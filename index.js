var express=require('express');
var routes=require('./router');
var app=express();
var bodyParser=require('body-parser');

app.set('view engine','jade');
app.set('views',__dirname+'/public');

//add post support
app.use(bodyParser.urlencoded());

routes.index(app);

app.listen(3000);

console.log('server has started...');
