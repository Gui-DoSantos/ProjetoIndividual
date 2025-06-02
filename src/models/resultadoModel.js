var database = require("../database/config");

async function salvar(resultado, suaPontuacao, computadorPontuacao, rodadaFinal, fk_usuario, fk_jogador) {
    const query = `INSERT INTO resultados_jogo (resultado, sua_pontuacao, computador_pontuacao, rodada_final, fk_usuario, fk_jogador)
                   VALUES ('${resultado}', ${suaPontuacao}, ${computadorPontuacao}, ${rodadaFinal}, ${fk_usuario}, '${fk_jogador}')`;

    try {
        const result = await database.executar(query);
        return result;
    } catch (error) {
        throw error;
    }
}

async function listarTudo(userId) {
    if (!userId) {
        throw new Error("Parâmetro fk_usuario é obrigatório");
    }

    const query = `
        SELECT *
        FROM resultados_jogo
        JOIN usuarios ON resultados_jogo.fk_usuario = usuarios.id_usuarios
        JOIN jogador ON usuarios.fk_jogador = jogador.id_jogador
        WHERE id_usuarios = ${userId}
    `;

    try {
        const dados = await database.executar(query);
        return dados;
    } catch (error) {
        throw error;
    }
}


async function listarPlacar() {

    const query = `    
    SELECT COUNT(*) as quantidadeGanhou, usuarios.nome as nome
    FROM resultados_jogo join usuarios on id_usuarios = fk_usuario
    WHERE resultado = 'ganhou' group by usuarios.nome limit 3;
    `;

    try {
        const dados = await database.executar(query);
        return dados;
    } catch (error) {
        throw error;
    }
}

async function listarGols(userId) {
     if (!userId) {
        throw new Error("Parâmetro fk_usuario é obrigatório");
    }

    const query = `    
            SELECT fk_usuario, SUM(sua_pontuacao) AS total_pontuacao,  SUM(computador_pontuacao) as gols_tomados FROM resultados_jogo
    WHERE fk_usuario = ${userId} GROUP BY fk_usuario;
    `;

    try {
        const dados = await database.executar(query);
        return dados;
    } catch (error) {
        throw error;
    }
}


async function listarPlacar() {

    const query = `    
    SELECT 
  u.nome AS nome_usuario,
  j.nome AS nome_jogador,
  COUNT(r.id_jogo) AS partidas_utilizadas
FROM jogador j
JOIN usuarios u ON j.id_jogador = u.fk_jogador
LEFT JOIN resultados_jogo r ON u.id_usuarios = r.fk_usuario
GROUP BY u.id_usuarios, u.nome, j.id_jogador, j.nome
ORDER BY partidas_utilizadas DESC;
    `;

    try {
        const dados = await database.executar(query);
        return dados;
    } catch (error) {
        throw error;
    }
}



async function Utilizado(userId) {

    const query = `  SELECT 
  j.nome AS nome_jogador,
  COUNT(*) AS total_utilizacoes
FROM 
  resultados_jogo r
JOIN 
  jogador j ON r.fk_jogador = j.id_jogador
WHERE 
  r.fk_usuario = ${userId}
GROUP BY 
  r.fk_jogador
ORDER BY 
  total_utilizacoes DESC
LIMIT 1;
    `;

    try {
        const dados = await database.executar(query);
        return dados;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    salvar,
    listarTudo,
    listarPlacar,
    listarGols,
    Utilizado
};