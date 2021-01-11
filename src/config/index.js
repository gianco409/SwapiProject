'use strict'
require('dotenv').config()

const config = {
  env: process.env.ENV || 'production',
  swapiQueryURL: process.env.SWAPI_QUERY_URL || 'https://swapi.py4e.com/api',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || '5442',
  dbName: process.env.DB_NAME || 'db_swapi',
  dbUser: process.env.DB_USER || 'postgres',
  dbPass: process.env.DB_PASS || 'root',
  prjPort: process.env.APP_PORT || '3001',
}

module.exports = {
  config
}
