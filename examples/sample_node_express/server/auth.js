var express = require('express'),
    util = require('util');
    
var app = express();
app.configure(function() {
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
    app.use(express.cookieParser('random secret passphrase'));
    app.use(express.session());
});

var accessChecker = function(req, res, next) {
  if(req.session.user && req.session.user.isAuthenticated) {
      next();
  } else {
      res.redirect('/login');
  }
};

app.get('/login', function(req, res){
    res.render('login');
});

app.post('/login', function(req, res){
   if(req.body.username === req.body.password) {
       req.session.user = { isAuthenticated: true, username: req.body.username };
       res.redirect('/private');
   } else {
       res.redirect('/login');
   }
});

app.get('/private', accessChecker, function(req, res) {
   res.send(util.format('Private Access. Welcome %s', req.session.user.username));
});

app.listen(process.env.PORT);