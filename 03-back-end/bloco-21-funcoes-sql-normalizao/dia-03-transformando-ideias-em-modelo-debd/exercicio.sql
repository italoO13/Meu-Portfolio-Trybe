DROP SCHEMA IF EXISTS normalization;

CREATE DATABASE normalization;
USE normalization;

CREATE TABLE funcionarios(
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL, 
    email VARCHAR(50) NOT NULL, 
    contato VARCHAR(20) NOT NULL, 
    data_cadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE setor(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(50) NOT NULL
);

CREATE TABLE funcionario_setor(
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
);

INSERT INTO funcionarios(funcionario_id, nome, sobrenome, email, contato, data_cadastro)
	VALUES
		   (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
			(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
            (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
            (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');
            
INSERT INTO setor(setor)
	VALUES ('Administração'),
			('Operacional'),
            ('Estratégico'),
            ('Marketing'),
            ('vendas');
            
INSERT INTO funcionario_setor(funcionario_id, setor_id)
	VALUES (12, 1),
			(12,	5),
			(13,	2),
			(14,	3),
			(14,	5),
			(15,	4);
            
#EXERCICIO 2

DROP SCHEMA IF EXISTS zoologico;
CREATE DATABASE zoologico;
USE zoologico;

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(20) NOT NULL, 
    sexo BOOL
);

CREATE TABLE localizacao(
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(20),
    jaula INT
);

CREATE TABLE cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT, 
	nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(20) NOT NULL, 
    sexo BOOL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)

);

CREATE TABLE animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(20) NOT NULL, 
    sexo BOOL,
	localizacao_id INT NOT NULL,
    FOREIGN KEY (localizacao_id) REFERENCES localizacao(localizacao_id)

);

CREATE TABLE animais_funcionarios(
	cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
);