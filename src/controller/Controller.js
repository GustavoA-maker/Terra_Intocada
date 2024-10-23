// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

async function storeUser(request, response) {
    // Preparar o comando de execução no banco
    const query = 'insert into cadastro(nome, usuario, senha) VALUES(?, ?, ?)';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.nome,
        request.body.usuario,
        request.body.senha
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {

        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário cadastrado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    storeUser
}