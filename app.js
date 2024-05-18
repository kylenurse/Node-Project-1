const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')


const app = express();
app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(adminRoutes);
app.use(shopRoutes);


app.use('/', (req,res,next) => {
    res.send('<h1>Home Page</h1>');
});

app.listen(3000);
