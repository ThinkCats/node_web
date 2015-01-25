var express=require('express');
var app=express();
var routes=require('./router')(app);

app.listen(3000);
