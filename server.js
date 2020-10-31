const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pbSchemaModel = require('./models_schema');

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017/personalBudget';

app.use('/', express.static('public'));
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        pbSchemaModel.find({})
        .then((data) => {
            res.json(data);
            mongoose.connection.close();
        })
        .catch((error) => {
            console.log(error);
        });
    })
    .catch((error) => {
        console.log(error);
    })
});

app.put('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            var budgetItem = {
                title: req.body.title,
                budget: req.body.budget,
                backgroundColor: req.body.backgroundColor
            };

            pbSchemaModel.insertMany(budgetItem)
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.post('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            var budgetItem = {
                title: req.body.title,
                budget: req.body.budget,
                backgroundColor: req.body.backgroundColor
            };

            pbSchemaModel.insertMany(budgetItem)
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});