const express = require('express');
const router = express.Router();
const dataControllers = require('../controllers/dataController');

router.get('/clients', dataControllers.getAllDataClient);


module.exports = router;