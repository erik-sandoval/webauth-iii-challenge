// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/lambda'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    }
  }
};