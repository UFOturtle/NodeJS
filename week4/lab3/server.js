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

app.get('/', (req, res)=>{
    res.render('index', {name:"Lee"})
})
app.get('/index', (req, res)=> {
    res.render('index')
})
app.get('/form', (req, res)=> {
    res.render('form1', {choices: [3,4,5,10,20]})
})

hbs.registerHelper('tableMaker', (num)=> {
    console.log(num)
    str = ''
    for(let i = 0; i < num; i++ )
    {
        str += '<tr>'
        for(let j = 0; j < num; j++)
        {
            let color = (000000 + ((1<<24)*Math.random()|0)).toString(16)
            str += `<td style="background-color:${color}">${color}</td>`
        }
        str += '</tr>'
    }

    return new hbs.handlebars.SafeString(str)

})

app.all('/table', (req, res)=> {
    console.log(req.body.number)
    res.render('table', {number: req.body.number})
})
