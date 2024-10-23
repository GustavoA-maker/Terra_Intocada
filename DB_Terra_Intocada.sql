CREATE DATABASE DB_Terra_Intocada;
USE DB_Terra_Intocada;

CREATE TABLE denuncia(
	denuncia1 VARCHAR(255) PRIMARY KEY not null
);


create table cadastro(
	id int not null auto_increment key,
	nome varchar(120) not null,
    usuario varchar(255),
    senha varchar(255)
);  

CREATE TABLE povos_indigenas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    etnia VARCHAR(255) NOT NULL,
    origem TEXT NOT NULL,
    cultura TEXT NOT NULL,
    historia TEXT NOT NULL
);

truncate denuncia;
truncate cadastro;


select * from cadastro;
select * from denuncia;
select * from povos_indigenas;

DROP TABLE cadastro;
DROP TABLE denuncia;
DROP TABLE povos_indigenas;