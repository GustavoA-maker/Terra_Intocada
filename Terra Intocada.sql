CREATE TABLE  cadastro (
	id INT PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(16) NOT NULL
    );
    
    CREATE TABLE informações (
    id INT PRIMARY KEY,
    tribo VARCHAR(255) NOT NULL,
    informações 
    
    )