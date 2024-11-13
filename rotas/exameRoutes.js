const express = require('express');
const router = express.Router();
const exameController = require('../Controllers/exameController');

router.get('/exames', exameController.getAllExames);
router.get('/exames/:id', exameController.getExameById);
router.post('/exames', exameController.createExame);
router.patch('/exames/:id', exameController.updateExame);
router.delete('/exames/:id', exameController.deleteExame);

module.exports = router;