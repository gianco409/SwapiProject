'use strict'
const swapi = require('../utils/Swapi')
const { isInteger, emptyToNull } = require('../utils/string')

module.exports = ({ PlanetModel }) => {

	async function downloadData( body ) {

		try {
			console.log(`--------- BEGIN, downloadData /planets/${body.id}`)

			const data = await swapi._get(`/planets/${body.id}`)

			// data validation
			if (!data) throw new Error('No data was found')
			console.log('Body:', JSON.stringify(data))

			await create(data, body)

			console.log(`--------- END, downloadData /planets/${body.id}`)

		} catch (e) {
			console.log(`An error was throwed ${e.message}`) //
			return false
		}
	}

	async function getDetail(req) {
		const { type, idPlanet } = req.params

		const people = await findOne({ where: { id: idPlanet } })

		return await Promise.all([people]).then(rsp => {
			return {
				data: rsp[0]
			}
		})
	}

	const create = async (data, body ) => {
		if (!data) return false

		try {
			data = await parsePlanet(data, body)
			await PlanetModel.create(data)
		} catch (error) {
			console.log(`Error: `, error.response)
		}
	}

	const parsePlanet = async (data) => {
		emptyToNull(data)
		const planet = {
			id: body.id,
			nombre: data.name,
			periodoRotacion: data.rotation_period,
			periodoOrbital: data.orbital_period,
			diametro: data.diameter,
			clima: data.climate,
			gravedad: data.gravity,
			terreno: data.terrain,
			aguaSuperficie: data.surface_water,
			poblacion: data.population,
			//residentes
			//peliculas
			creado: data.created,
			editado: data.edited,
			url: data.url
		}
		return Promise.resolve(planet)
	}

	const findOne = async (args) => PlanetModel.findOne(args)

	return {
		downloadData,
		getDetail
	}
}
