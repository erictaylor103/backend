const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('../auth/authRouter');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use('/api/auth', authRouter);

server.get("/", (req, res) => {
    res.json({api: "up"});
})


module.exports = server;