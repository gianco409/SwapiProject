'use strict'
const axios = require('axios')
const { config } = require('../config')

const swapi = axios.create({
  baseURL: config.swapiQueryURL,
  timeout: 0,
  headers: { }
})

swapi._get = async function (url) {
  try {
    return await this.get(url)
  } catch (error) {
    console.log(`Error: `, error.response)
    return false
  }
}

module.exports = swapi
