/**
 * Module dependencies.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/views'));
app.use(express.static(__dirname + '/public/img'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});
 
app.listen(3000); 