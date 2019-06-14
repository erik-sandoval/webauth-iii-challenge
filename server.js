const express = require('express');
const helmet = require('helmet');
const server = express();
const cors = require('cors')

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');

server.use(helmet());
server.use(cors())
server.use(express.json());

server.use('/api/auth/', authRouter);
server.use('/api/users', usersRouter);

module.exports = server;
