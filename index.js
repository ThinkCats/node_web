var express=require('express');
var bodyParser=require('body-parser');
var session = require('express-session');
var routes=require('./router');
var db=require('./router/db');
var app=express();

app.set('view engine','jade');

app.set('views',__dirname+'/public');

//add post support
app.use(bodyParser.urlencoded());
//add session support
app.use(session({
    secret: 'keyboard cat',
    name:'testsession',
    cookie:{maxAge:80000},
    resave: false,
    saveUninitialized: true
}));

db.connects();
routes.index(app);

app.listen(3000);

console.log('server has started...');
