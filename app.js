const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');


const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin');
const path = require('path');

const app = express();
app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,  'views', 'notFound.html'));
});

app.listen(3000);
