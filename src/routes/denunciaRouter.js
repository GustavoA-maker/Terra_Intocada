const { Router }  = require('express');
const router = Router();
 
const { storeDenuncia, getDenuncia} = require('../controller/denunciaController');
 
/**
* @swagger
* /store/denuncia:
*   post:
*     summary: Cria uma nova denúncia
*     tags: [Denúncias]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               denunciaform:
*                 type: string
*                 description: Descrição da denúncia
*     responses:
*       201:
*         description: Denúncia criada com sucesso
*       400:
*         description: Erro na criação da denúncia
*/
router.post('/store/denuncia', storeDenuncia);
 
/**
* @swagger
* /get/denuncia:
*   get:
*     summary: Retorna todas as denúncias
*     tags: [Denúncias]
*     responses:
*       200:
*         description: Sucesso
*       400:
*         description: Erro ao buscar denúncias
*/
router.get('/get/denuncia', getDenuncia);
 
module.exports = router;