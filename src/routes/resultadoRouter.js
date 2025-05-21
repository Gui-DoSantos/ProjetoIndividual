var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.post("/resultados", resultadoController.salvarResultado);

module.exports = router;