var resultadoModel = require("../models/resultadoModel");

async function salvarResultado(req, res) {
  try {
    const { resultadoServer, sua_pontuacao, computador_pontuacao, rodada_final, fk_usuario, fk_jogador } = req.body;

    await resultadoModel.salvar(resultadoServer, sua_pontuacao, computador_pontuacao, rodada_final, fk_usuario, fk_jogador);

    res.status(200).json({ message: "Salvou" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function listarResultados(req, res) {
    const userId = req.query.usuario;  

    if (!userId) {
        return res.status(400).json({ mensagem: "Usuario é obrigatorio" });
    }

    try {
        const dados = await resultadoModel.listarTudo(userId);
        res.json(dados);
    } catch (error) {

        res.status(500).json({ mensagem: "Erro ", erro: error.message });
    }
}


async function listarGols(req, res) {
    const userId = req.query.usuario; 

    if (!userId) {
        return res.status(400).json({ mensagem: "Usuario é obrigatorio" });
    }

    try {
        const dados = await resultadoModel.listarGols(userId);
        res.json(dados);
    } catch (error) {

        res.status(500).json({ mensagem: "Erro ", erro: error.message });
    }
}

async function listarPlacar(req, res) {

    try {
        const dados = await resultadoModel.listarPlacar();
        res.json(dados);
    } catch (error) {

        res.status(500).json({ mensagem: "Erro ", erro: error.message });
    }
}


async function Utilizado(req, res) {
     const userId = req.query.usuario; 

    try {
        const dados = await resultadoModel.Utilizado(userId);
        res.json(dados);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro", erro: error.message });
    }
}

module.exports = {
  salvarResultado,
  listarResultados,
  listarPlacar,
  listarGols,
  Utilizado
};