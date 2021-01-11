'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = ({ config }) => {
	const sequelize = setupDatabase(config.execute)

	const execute = sequelize.define('planeta', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		nombre: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		periodoRotacion: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		periodoOrbital: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		diametro: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		clima: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		gravedad: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		terreno: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		aguaSuperficie: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		poblacion: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		/*residentes: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		peliculas: {
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
