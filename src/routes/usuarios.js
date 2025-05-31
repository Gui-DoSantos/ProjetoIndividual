var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD

var usuarioController = require("../controllers/usuarioController");


router.get("", (req, res) => {
  res.render("index")
});
//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});



router.put('/salvar/:idUsuario', upload.single('foto'), usuarioController.salvar);




module.exports = router;