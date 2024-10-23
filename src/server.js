const app = require('./app');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Configuração do Swagger
const swaggerOptions = {
  definition: { // Mudança de "swaggerDefinition" para "definition"
    openapi: '3.0.0',
    info: {
      title: 'API de Denúncias, Tarefas e Usuários',
      version: '1.0.0',
      description: 'API para gerenciar denúncias, tarefas e usuários',
    },
    servers: [
      {
        url: `http://localhost:${app.get('port')}`, // Correção na interpolação
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Certifique-se que o caminho está correto
};

// Gerar documentação do Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = app.get('port');
app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});