const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const jugadorController= require('../controllers/jugador_controller')
const autoController = require('../controllers/auto_controller')

//autos
router.get(apiRoute+'/autos',autoController.getAll)
router.post(apiRoute+'/autos',autoController.create)
router.put(apiRoute+'/autos',autoController.update)
router.delete(apiRoute+'/autos',autoController.delete)

//students
router.get(apiRoute+'/jugador',jugadorController.getAll)

module.exports = router;