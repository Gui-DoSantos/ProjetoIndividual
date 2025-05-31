

select * from usuarios;

select * from resultados_jogo;

select * from jogador;

select usuarios.nome as Usuario, resultado as resultado, jogador.nome as Jogador from usuarios join jogador on fk_jogador = id_jogador join resultados_jogo on fk_usuario = id_usuarios;


create database individual;

use individual;

CREATE TABLE jogador (
  id_jogador INT NOT NULL  PRIMARY KEY  AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
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

CREATE TABLe imagem (
	id_imagem int primary key auto_increment,
    caminho_imagem varchar(400),
    fk_usuario int,
    foreign key (fk_usuario) references usuarios(id_usuarios)



);
INSERT INTO jogador (nome) VALUES
('Pelé'),
('Diego Maradona'),
('Ronaldo Fenômeno'),
('Lionel Messi'),
('Kylian Mbappé'),
('Romário'),
('Gerd Müller'),
('Johan Cruyff'),
('Zinedine Zidane'),
('Andrés Iniesta'),
('Xavi Hernández'),
('Luka Modrić'),
('Garrincha'),
('Michel Platini'),
('Socrates'),
('Kaká'),
('Neymar'),
('Cristiano Ronaldo'),
('Zico'),
('Ronaldinho');