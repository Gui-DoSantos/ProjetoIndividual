var resultadoModel = require("../models/resultadoModel");

async function salvarResultado(req, res) {
  try {
    const { resultadoServer, sua_pontuacao, computador_pontuacao, rodada_final, fk_usuario } = req.body;

    await resultadoModel.salvar(resultadoServer, sua_pontuacao, computador_pontuacao, rodada_final, fk_usuario);

    res.status(200).json({ message: "Resultado salvo com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  salvarResultado
};