const pgp = require('pg-promise')();

const db = pgp({
  connectionString: 'postgres://postgres:aswin93@localhost:5432/mydb',
});
