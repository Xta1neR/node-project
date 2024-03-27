const express = require("express");
const app = express();

app.get("/hello", function(req, res){
	res.send("Hello World!");
});

app.listen(3000);


// Request and Response in ExpressJs are parameter of callbacks. 