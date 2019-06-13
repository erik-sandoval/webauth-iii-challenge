const express = require('express');
const helmet = require('helmet');
const server = express();
const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');

server.use(helmet());
server.use(express.json());

server.use('/api/auth/', authRouter);
server.use('/api/users', usersRouter);

module.exports = server;
