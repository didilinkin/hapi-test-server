const { Client, Pool } = require('pg')

const DB = {
  user: process.env.PG_USERNAME,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
}

const pool = new Pool(DB)

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client(DB)
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

module.exports = {
  client,
  pool,
}
