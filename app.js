
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');

var inbound = require('./routes/inbound');
var outbound = require('./routes/outbound');
var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

// Connect to the Mongo database, whether locally or on Heroku
var local_database_name = 'gayle-sms';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
//mongoose.connect(database_uri); //TODO: set up database

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/receive', inbound.receive);
app.get('/send', outbound.send);
/*app.get('/', index.view);
app.get('/project/:id', project.projectInfo);
app.post('/project/new', project.addProject);
app.post('/project/:id/delete', project.deleteProject);*/
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
