var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");

app.use(cookieParser());
app.get('/', function(req,res){
	res.cookie('course','html').send('Our Website has sent the cookies');
	console.log('Cookies : ', req.cookies);
});

app.get('/clear', function(req,res){
	res.clearCookie('course','html');
	res.send('cookie cleared');
});	

app.listen(3000);