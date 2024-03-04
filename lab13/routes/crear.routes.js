const express = require('express');
const router = express.Router();
const artistasController = require('../controllers/crear.controller');

router.get('/vis', artistasController.get_list);

router.get('/armar', artistasController.get_armar);

router.post('/armar', artistasController.post_armar);

router.get('/', artistasController.get_root);

module.exports = router;