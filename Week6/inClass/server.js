const express = require('express');
const hbs = require('hbs');
require('./db/mongoose/mongoose.js');
let user = require('./db/models/user.js');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);
app.use(express.static(`${{__dirname}}/public`));
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render('index.hbs', {});
})


app.post('/results', (req, res) => {
    let User = new user(req.body);

    User.save().then ( () => {
        res.status(200)
        res.render('results.hbs', 
            {
                name: req.body.name, 
                email: req.body.email
            });
    }).catch ((e) => {
        res.status(400).send(e);
    });   
});

app.listen(3001, () => {
    console.log("http://localhost:3000/")
})