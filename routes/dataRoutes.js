const express = require('express');
const router = express.Router();
const dataControllers = require('../controllers/dataController');

router.get('/clients', dataControllers.getAllDataClient);
router.get('/books', dataControllers.getAllDataBook);

router.post('/createClient', dataControllers.createDataCli );
router.post('/createBook', dataControllers.createDataBook );

router.put('/updateCli/:id', dataControllers.updateDataCli);
router.put('/updateBook/:id', dataControllers.updateDataBook);
module.exports = router;