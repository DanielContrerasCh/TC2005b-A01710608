const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canView = require('../util/can-view');
const canCreate = require('../util/can-create');

const crearController = require('../controllers/crear.controller');

router.get('/vis', isAuth, canView, crearController.get_list);

router.get('/buscar/:valor_busqueda', isAuth, canView, crearController.get_buscar);
router.get('/buscar/', isAuth, canView, crearController.get_buscar);

router.post('/vis/delete', isAuth, canCreate, crearController.post_delete);

router.get('/vis/:artistaCreado_id', isAuth, canView, crearController.get_list);

router.get('/', isAuth, canCreate, crearController.get_armar);
router.post('/', isAuth, canCreate, crearController.post_armar);

module.exports = router;