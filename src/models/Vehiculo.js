'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = ({ config }) => {
	const sequelize = setupDatabase(config.execute)

	const execute = sequelize.define('planeta', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		url: {
			type: Sequelize.STRING(20),
			allowNull: true
		}
	})

	return {
		execute
	}
}
