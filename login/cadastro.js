async function login() {
    //
    const nome = document.getElementById('nome').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    //se senhas iguais

    

    const data = {
        nome, usuario, senha
    }

    const response = await fetch('http://localhost:3008/api/store/user', {
        method: "POST",
        headers:{
             "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = response.json();

    if(result.success) {
        alert(result.message);
    } else {
        alert("conta criada")
    }
}


const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3008;

// Configuração para permitir requisições de outras origens (CORS)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Endpoint para buscar os dados da outra API
app.get('/api/get-data', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3008/api/store/user'); // Substitua pela URL da API que envia dados para o SQL
        const data = response.data;

        // Retorna os dados da API
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
