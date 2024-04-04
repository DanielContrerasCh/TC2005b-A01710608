const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canView = require('../util/can-view');
const canCreate = require('../util/can-create');

const crearController = require('../controllers/crear.controller');

router.get('/', isAuth, canView, crearController.get_list);

router.get('/armar', isAuth, canCreate, crearController.get_armar);

router.post('/armar', isAuth, canCreate, crearController.post_armar);

router.get('/buscar/:valor_busqueda', isAuth, canView, crearController.get_buscar);
router.get('/buscar/', isAuth, canView, crearController.get_buscar);

router.post('/delete', isAuth, canCreate, crearController.post_delete);

router.get('/:artistaCreado_id', isAuth, canView, crearController.get_list);

router.get('/', isAuth, crearController.get_root);

module.exports = router;