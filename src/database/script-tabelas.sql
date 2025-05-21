-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database individual;

use individual;


CREATE TABLE jogador (
  id_jogador INT NOT NULL  PRIMARY KEY  AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  foto_url TEXT DEFAULT NULL
);

CREATE TABLE usuarios (
  id_usuarios INT NOT NULL   PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  email VARCHAR(50),
  senha VARCHAR(50),
  fk_jogador INT,
  FOREIGN KEY (fk_jogador) REFERENCES jogador(id_jogador)
);

CREATE TABLE resultados_jogo (
  id_jogo INT primary key AUTO_INCREMENT ,
  resultado ENUM('ganhou', 'perdeu', 'empate') NOT NULL,
  sua_pontuacao INT NOT NULL,
  computador_pontuacao INT NOT NULL,
  rodada_final INT NOT NULL,
  data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
  fk_usuario INT NOT NULL,

  FOREIGN KEY (fk_usuario) REFERENCES usuarios(id_usuarios)
);