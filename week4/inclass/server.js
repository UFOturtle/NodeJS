const express = require('express')
const hbs = require('hbs')

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:false}))

app.listen(3000, ()=>{
    console.log('server running at port 3000')
})

function rando(req, res, next)
{
    req.num = Math.round(Math.random()*25)
    next()
}



app.get('/',rando, (req, res, next)=>{
    res.render('index', {name:"Lee", num:req.num})
})