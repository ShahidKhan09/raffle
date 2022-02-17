const mongoose = require('mongoose');


const schema = new mongoose.Schema({

    time: { type: Date, default: Date.now }
})


/**
 * @typedef Raffle
 */
module.exports = mongoose.model('Raffle', schema);