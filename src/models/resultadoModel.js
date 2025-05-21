var database = require("../database/config");

async function salvar(resultado, suaPontuacao, computadorPontuacao, rodadaFinal, fk_usuario) {
    const query = `INSERT INTO resultados_jogo (resultado, sua_pontuacao, computador_pontuacao, rodada_final, fk_usuario)
                   VALUES ('${resultado}', ${suaPontuacao}, ${computadorPontuacao}, ${rodadaFinal}, ${fk_usuario})`;

    try {
        const result = await database.executar(query);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    salvar
};