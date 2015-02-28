var express=require('express');
var bodyParser=require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
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
    name:'web_session',
    cookie:{maxAge:900000},
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        host:'localhost',
        port:27017,
        db:'session_db'
    })
}));

db.connects();
routes.index(app);

app.listen(3000);

console.log('server has started...');
