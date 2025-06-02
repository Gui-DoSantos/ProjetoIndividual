var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.post("/resultados", resultadoController.salvarResultado);

router.get('/resultados', resultadoController.listarResultados);

router.get('/placar', resultadoController.listarPlacar);

router.get('/gols', resultadoController.listarGols);

router.get('/utilizado', resultadoController.Utilizado);


module.exports = router;