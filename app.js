var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'vendor')));

app.listen(3000, function() {
    console.log('Server Started on Port 3000');

});

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/index', function(req, res) {
    res.render('index');
});
app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});
app.get('/services', function(req, res) {
    res.render('services');
});