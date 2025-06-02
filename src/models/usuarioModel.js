var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
      SELECT 
    u.id_usuarios, 
    u.nome, 
    u.email, 
    i.caminho_imagem, 
    u.senha,
    j.id_jogador as id_jogador
FROM 
    usuarios u
LEFT JOIN 
    imagem i ON u.id_usuarios = i.fk_usuario join jogador j  on j.id_jogador = fk_jogador
WHERE 
    u.email = '${email}' AND u.senha = '${senha}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, fk_jogador) {
    console.log("ACESSEI O USUARIO MODEL", nome, email, senha, fk_jogador);

    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha, fk_jogador) 
        VALUES ('${nome}', '${email}', '${senha}', '${fk_jogador}');
    `;
    
    return database.executar(instrucaoSql).then(() => {
        var instrucaoSelect = `
            SELECT id_usuarios FROM usuarios
            WHERE email = '${email}'
            ORDER BY id_usuarios DESC
            LIMIT 1;
        `;

        return database.executar(instrucaoSelect);
    }).then(function(resultado) {
            var idUsuario = resultado[0].id_usuarios;

            var insertImagem = `
                INSERT INTO imagem (fk_usuario)
                VALUES (${idUsuario});
            `;

            return database.executar(insertImagem);
        
    })
}

function salvar(usuario) {
  const instrucao = `
    UPDATE imagem 
    SET caminho_imagem = '${usuario.imagem}' 
    WHERE fk_usuario = ${usuario.id_usuario}
  `;
  return database.executar(instrucao).then(() => {
        var instrucaoSelect = `
  UPDATE usuarios 
  SET nome = '${usuario.nome}', senha = '${usuario.senha}', fk_jogador = ${usuario.jogador}
  WHERE id_usuarios = ${usuario.id_usuario};
`;

        return database.executar(instrucaoSelect);
    })
}




module.exports = {
    autenticar,
    cadastrar,
     salvar
};