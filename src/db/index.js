'use strict'

const setupDatabase = require('../lib/db')

const setupPeopleModel = require('../models/Persona')
const setupPeople = require('../lib/People')

const setupPlanetModel = require('../models/Planeta')
const setupPlanet = require('../lib/Planet')

let sequelize

module.exports = async function (config) {
  const SwapiProjectConfig = {
    host: config.dbHost,
    port: config.dbPort,
    database: config.dbName,
    username: config.dbUser,
    password: config.dbPass,
    dialect: 'postgres',
    logging: false
  }

  try {
    sequelize = await setupDatabase(SwapiProjectConfig)
    await sequelize.authenticate()

    const PlanetModel = setupPlanetModel(SwapiProjectConfig)
    const Planet = setupPlanet({ PlanetModel })

    const PeopleModel = setupPeopleModel(SwapiProjectConfig)
    const People = setupPeople({ PeopleModel })

    return {
      Planet,
      People
    }
  } catch (error) {
    console.log(`Error: `, error.response)
    return false
  }
}
