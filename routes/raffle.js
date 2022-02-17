const path = require('path');

const express = require('express');

const raffleController = require('../controllers/raffle');

const router = express.Router();

router.post('/raffle', raffleController.enterRaffle);



module.exports = router;
