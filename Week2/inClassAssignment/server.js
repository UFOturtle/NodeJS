var express = require("express");
var path = require("path");
var hbs = require("hbs");
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get("/index", function(req, res){
    res.render("index.hbs",{junk: "My name Bob."});
});

app.get("/form", function(req, res){
    res.render("form.hbs",{junk: "My name Bob."});
});

app.post("/results", function(req, res){
    res.render("results.hbs", {junk:req.body.fName + " " + req.body.lName });
});


app.listen(3000, ()=>{console.log("server running on port 3000")});
