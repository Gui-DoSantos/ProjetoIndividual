var resultadoModel = require("../models/resultadoModel");
var model = require('../models/resultadoModel');

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

async function listarResultados(req, res) {
    const userId = req.query.usuario;  

    if (!userId) {
        return res.status(400).json({ mensagem: "Parâmetro usuario é obrigatório" });
    }

    try {
        const dados = await model.listarTudo(userId);
        res.json(dados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar resultados", erro: error.message });
    }
}


async function listarGols(req, res) {
    const userId = req.query.usuario; 

    if (!userId) {
        return res.status(400).json({ mensagem: "Parâmetro usuario é obrigatório" });
    }

    try {
        const dados = await model.listarGols(userId);
        res.json(dados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar resultados", erro: error.message });
    }
}

async function listarPlacar(req, res) {

    try {
        const dados = await model.listarPlacar();
        res.json(dados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao buscar resultados", erro: error.message });
    }
}

module.exports = {
  salvarResultado,
  listarResultados,
  listarPlacar,
  listarGols
};