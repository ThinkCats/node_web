var express=require('express');
var bodyParser=require('body-parser');
var routes=require('./router');
var db=require('./router/db');
var app=express();

app.set('view engine','jade');

app.set('views',__dirname+'/public');

//add post support
app.use(bodyParser.urlencoded());

db.connects();
routes.index(app);

app.listen(3000);

console.log('server has started...');
