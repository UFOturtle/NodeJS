const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//Set views directory and views engine as Handlebars
app.set('views', path.join(__dirname, "views"))
app.set("view engine", "hbs")

//Get request routing
app.get('/', (req, res) => 
{
    res.render('index')
    res.render('form')
})

app.listen(port, () => console.log(`listening on port ${port}`))