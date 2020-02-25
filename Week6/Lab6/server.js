const express = require('express');
const hbs = require('hbs');
require('./db/mongoose/mongoose.js');
let employee = require('./db/models/employee.js');
const mongoose = require("mongoose");

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);
app.use(express.static(`${{__dirname}}/public`));
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render('index.hbs', {});
})

app.get('/ViewEmployees', (req, res) => {
    const Employee = employee;

    employee.find().exec((err, docs) => { 
        res.render('ViewEmployees.hbs', 
        {
            employees: docs
        });
    });

});

app.post('/ViewEmployees', (req, res) => {
    let Employee = new employee(req.body);

    Employee.save().then ( () => {
        res.status(200)
        employee.find().exec((err, docs) => { 
            res.render('ViewEmployees.hbs', 
            {
                employees: docs
            });
        });
        
    }).catch ((e) => {
        res.status(400).send(e);
    });   
});

app.listen(3001, () => {
    console.log("http://localhost:3001/")
})