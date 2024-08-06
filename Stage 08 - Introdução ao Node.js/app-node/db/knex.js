const knex = requiere('knex')
const config = require('./knexfile')

const db = knex(config.development)

module.exports = db