'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = ({ config }) => {
	const sequelize = setupDatabase(config.execute)

	const execute = sequelize.define('persona', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		nombre: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		altura: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		masa: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		colorCabello: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		colorPiel: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		colorOjos: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		anioNacimiento: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		genero: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		mundoNatal: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		/*peliculas: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		especies: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		vehiculos: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		navesEstelares: {
			type: Sequelize.STRING(20),
			allowNull: true
		},*/
		creado: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		editado: {
			type: Sequelize.STRING(20),
			allowNull: true
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
