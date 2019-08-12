var express = require('express');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});

var app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.set ('views', './views');
app.listen(3000);

var menu = ['News Feed','Trends','Niche'];
app.get('/', function(req, res) {
	var tagline = "DÒNG CẢM HỨNG BẤT TẬN";
	res.render("homepage",{
		tagline : tagline,
		menu: menu
	});
});


// let myShortenFile = require ("./public/module/logic");
// myShortenFile.shorten()


