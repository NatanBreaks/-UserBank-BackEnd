``` sql
CREATE TABLE CADASTRO_NEXT(
	nome VARCHAR(32),
	cpf VARCHAR(18) unique,
	data_nascimento date,
	saldo decimal(15,2),
	limite decimal(15,2),
	cep VARCHAR(10),
    logradouro varchar(32),
    bairro varchar(32),
    numero varchar(6),
	cidade varchar(32),
	uf varchar(2),
	avatar_url varchar(128) 
);
```