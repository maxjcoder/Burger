var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressHandlebars = require('express-handlebars');

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false 
}))

app.use(methodOverride('_method'));
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers');
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});





