const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(helmet()); // set well-known security-related HTTP headers
app.use(compression());

app.disable("x-powered-by");

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

const raffleRoutes = require('./routes/raffle');

app.use('/raffle' , raffleRoutes);


app.listen(4100);
