const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))


const raffleRoutes = require('./routes/raffle');


app.use('/' , raffleRoutes);


app.listen(4100);
