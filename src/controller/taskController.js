const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    //Recuperando dados formulario
    const params = Array(
        request.body.denunciaform
    );

    const query = "INSERT INTO denuncia(denuncia1) VALUES(?)";

    connection.query(query, params, (err, results) => {
        console.log(err, results);
        if(results) {
            response
             .status(201)
             .json({
                success: true,
                message: "Sucesso!",
                data: results
             })
        } else {
            response
             .status(400)
             .json({
                success: false,
                message: "Ops, erro",
                data: err
             })
        }
    })
}

module.exports = {
    storeTask
}