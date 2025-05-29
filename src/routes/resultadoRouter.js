var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");
var controller = require('../controllers/resultadoController');

router.post("/resultados", resultadoController.salvarResultado);

router.get('/resultados', controller.listarResultados);

router.get('/placar', controller.listarPlacar);

router.get('/gols', controller.listarGols);

module.exports = router;