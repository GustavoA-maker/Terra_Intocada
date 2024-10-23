const { Router } = require('express');
const router = Router();
 
const { storeUser } = require("../controller/Controller");
 
/**
* @swagger
* /store/user:
*   post:
*     summary: Cria um novo usuário
*     tags: [Usuários]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               nome:
*                 type: string
*                 description: Nome do usuário
*               usuario:
*                 type: string
*                 description: Nome de usuário
*               senha:
*                 type: string
*                 description: Senha do usuário
*     responses:
*       201:
*         description: Usuário criado com sucesso
*       400:
*         description: Erro na criação do usuário
*/
router.post('/store/user', storeUser);
 
module.exports = router;