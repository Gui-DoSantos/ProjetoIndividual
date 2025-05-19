create database individual;

use individual;

select * from usuarios;

select * from resultados_jogo;

select * from jogador;

select usuarios.nome as Usuario, resultado as resultado, jogador.nome as Jogador from usuarios join jogador on fk_jogador = id_jogador join resultados_jogo on fk_usuario = id_usuarios;


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

INSERT INTO jogador (nome, foto_url) VALUES
-- Atacantes
('Pelé', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Pelé_2010.jpg'),
('Diego Maradona', 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Diego_Maradona_1986.jpg'),
('Ronaldo Fenômeno', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Ronaldo_cropped.jpg'),
('Lionel Messi', 'https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg'),
('Kylian Mbappé', 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Kylian_Mbappé_2018.jpg'),
('Romário', 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Romario_2010.jpg'),
('Gerd Müller', 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Gerd_Müller_2006.jpg'),
('Johan Cruyff', 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Johan_Cruyff_1974c.jpg'),
('Just Fontaine', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Just_Fontaine.jpg'),
('Paolo Rossi', 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Paolo_Rossi_2008.jpg'),

-- Meio-campistas
('Zinedine Zidane', 'https://upload.wikimedia.org/wikipedia/commons/4/49/Zinedine_Zidane_2008.jpg'),
('Andrés Iniesta', 'https://upload.wikimedia.org/wikipedia/commons/7/71/Andres_Iniesta_Euro_2012_vs_France_02.jpg'),
('Xavi Hernández', 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Xavi_Hernandez_2011.jpg'),
('Luka Modrić', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Luka_Modric_2018.jpg'),
('Garrincha', 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Garrincha_1962.jpg'),
('Didi', 'https://upload.wikimedia.org/wikipedia/commons/2/27/Waldyr_Pereira_Didi_1958.jpg'),
('Michel Platini', 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Michel_Platini_cropped.jpg'),
('Socrates', 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Socrates_1982.jpg'),
('Kaká', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kaka_Madrid.jpg'),
('Paul Pogba', 'https://upload.wikimedia.org/wikipedia/commons/9/90/Paul_Pogba_2018.jpg'),

-- Adicionados
('Neymar', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Neymar_2018.jpg'),
('Cristiano Ronaldo', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg'),
('Zico', 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Zico_2008.jpg'),
('Ronaldinho', 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Ronaldinho_Gaúcho_2019.jpg');