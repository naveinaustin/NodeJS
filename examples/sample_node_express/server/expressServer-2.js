var express = require("express");

var app = express();
app.configure(function() {
    app.use(express.logger('dev'));
    app.use(express.favicon());
    app.use(express.static(__dirname + '/app'))
});

app.listen(process.env.PORT)