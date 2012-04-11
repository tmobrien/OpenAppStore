
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var ArticleProvider = require('./public/javascripts/articleprovider-memory').ArticleProvider;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

var articleProvider = new ArticleProvider();
function OS(ua) {
	if (typeof(ua) === 'undefined')
		return 'other';
	
	var windows = /win/i;
	var mac = /mac/i;
	
	if (ua.match(windows))
		return 'windows';
	else if (ua.match(mac))
		return 'mac';
	else
		return 'other';
}

app.get('/', function(req,res) {
	articleProvider.findAll(function(error, docs) {
		res.render('index.jade', {locals: {
			title: 'Toolshed',
			apps: docs,
			os: OS(req.headers['user-agent']),
			}
		});
	});
});

app.get('/blog/new', function(req, res) {

	res.render('newblog.jade', { locals: {
		title: 'New Post'
	}});
});

app.post('/blog/new', function(req, res) {
	articleProvider.save({
		title: req.param('title'),
		body: req.param('body')
	}, function( error, docs) {
		res.redirect('/');
	});
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
