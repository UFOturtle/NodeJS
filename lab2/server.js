const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

const port = 3000

app.use(express.urlencoded())
app.use(express.static('public'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + "/views/partials")

app.get('/', (req, res) => {
    res.render("index.hbs")
})
app.get('/index', function(req, res) {
    res.render("index.hbs")
})
app.get('/about', function(req, res) {
    res.render("about.hbs")
})
app.get('/form', (req, res) => {
    res.render("form.hbs")
})
app.all('/results', (req, res) => {
    res.render("results.hbs", {name: req.body.name, email: req.body.email, comments: req.body.comments})
})

app.listen(port)