const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./routes/taskRouter');
const denunciaRouter = require('./routes/denunciaRouter.js');
const userRouter = require("./routes/userRouter")


const app = express();

app.set('port', process.env.PORT || 3008);
app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use('/api', denunciaRouter);
app.use('/api', userRouter);


module.exports = app;