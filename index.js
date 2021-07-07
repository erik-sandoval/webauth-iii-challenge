const server = require('./server');

const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send(`I'm working`);
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
