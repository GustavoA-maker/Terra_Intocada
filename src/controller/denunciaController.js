const connection = require('../config/db')
const dotenv = require('dotenv').config();

async function storeDenuncia(request, response) {
    const params = Array(
        request.body.denunciaform
    )
    
    const query = "INSERT INTO denuncia(denuncia1) VALUES(?)";

    connection.query(query, params, (err, results) => {
        console.log(err, results);
        if(results) {
            response
            .status(200)
            .json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                data: err,
            })
        }
    })
}

async function getDenuncia(request, response) {
    const query = "SELECT * FROM denuncia";

    connection.query(query, (err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            })
        }else{
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err
            })
        }
    })
}

module.exports = {
    storeDenuncia,
    getDenuncia
}