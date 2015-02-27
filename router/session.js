/**
 *
 * Created by wang on 15-2-12.
 */
var parseurl = require('parseurl');
module.exports.session=function(app){
    app.use(function (req, res, next) {
        var views = req.session.views;
        if (!views) {
            views = req.session.views = {}
        }
        // get the url pathname
        var pathname = parseurl(req).pathname;
        // count the views
        views[pathname] = (views[pathname] || 0) + 1;
        next();
    });

    app.get('/foo', function (req, res, next) {
        res.send('you viewed this page ' + req.session.views['/foo'] + ' times');
    });

    app.get('/bar', function (req, res, next) {
        res.send('you viewed this page ' + req.session.views['/bar'] + ' times');
    });

    app.get('/session',function(req,res){
        if(req.session.sessions){
            res.send("You have logined the page "+req.session.sessions+" before");
        }else{
            req.session.sessions='/session';
            res.send("This is your first visit this session page");
        }
    });
};
