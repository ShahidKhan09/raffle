const httpStatus = require('http-status');
const { omit } = require('lodash');
const Raffle = require('../models/raffle');

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,"../files/addresses.txt");

exports.enterRaffle = async (req , res, next) => {
    try {
        const walletAddress = req.body.walletAddress;
        console.log(walletAddress);
        let data;

        fs.appendFile(filePath, `${walletAddress} \n`, (err) => {
            if (err) {
                throw err;
            }
            console.log(`Address: ${walletAddress} was appended to file: ${filePath}`);
            data = `Address: ${walletAddress} was appended to file: ${filePath}`;
        } )

        res.status(httpStatus.OK);
        return res.json({ data: data });
    } catch (error) {
        return next(error);
    }

}