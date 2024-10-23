const { Router }  = require('express');

const router = Router();
 
const { storeTask } = require('../controller/taskController');
 
/**

* @swagger

* /store/post:

*   post:

*     summary: Cria uma nova tarefa

*     tags: [Tarefas]

*     requestBody:

*       required: true

*       content:

*         application/json:

*           schema:

*             type: object

*             properties:

*               titulo:

*                 type: string

*                 description: Título da tarefa

*               descricao:

*                 type: string

*                 description: Descrição da tarefa

*     responses:

*       201:

*         description: Tarefa criada com sucesso

*       400:

*         description: Erro na criação da tarefa

*/

router.post('/store/post', storeTask);
 
module.exports = router;

 