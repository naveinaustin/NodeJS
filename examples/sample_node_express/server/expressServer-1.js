var express = require("express");

var app = express();

app.get('/', function(req, res) {
   res.send('Welcome to first page'); 
});

app.get('/customers', function(req, res) {
    res.send('Customers page'); 
});

app.get('/customers/create', function(req, res) {
    res.send('Customers create page'); 
});

https://sample-node-express-naveinaustin.c9users.io/customer/600
app.get('/customers/:id', function(req, res) {
    res.send('Customers get ' + req.params.id); 
});

//https://sample-node-express-naveinaustin.c9users.io/customersquery?id=600
app.get('/customersquery', function(req, res) {
    res.send('Customers get ' + req.query.id); 
});

app.listen(process.env.PORT)