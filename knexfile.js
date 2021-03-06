// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      user : 'apple',
      database : 'helper'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  mydb :{
    client : 'postgresql',
    connection :{
      host : '127.0.0.1',
      user  : 'apple',
      database : 'postgres'
    }
  }
};
