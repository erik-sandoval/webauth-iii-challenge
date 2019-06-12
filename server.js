const express = require('express');
const server = express();
const authRouter = require('./auth/auth-router');

server.use(express.json());

server.use('/api/auth/', authRouter);

module.exports = server;