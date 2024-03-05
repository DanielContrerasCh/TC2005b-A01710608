const express = require('express');
const router = express.Router();

const crearController = require('../controllers/crear.controller');

router.get('/vis', crearController.get_list);

router.get('/armar', crearController.get_armar);

router.post('/armar', crearController.post_armar);

router.get('/', crearController.get_root);

module.exports = router;