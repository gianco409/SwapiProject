'use strict'
const swapi = require('../utils/Swapi')
const { isInteger, emptyToNull } = require('../utils/string')

module.exports = ({ PeopleModel }) => {

	async function downloadData(body) {

		try {
			console.log(`--------- BEGIN, downloadData /people/${body.id}`)

			const data = await swapi._get(`/people/${body.id}`)

			// data validation
			if (!data) throw new Error('No data was found')
			console.log('Body:', JSON.stringify(data))

			await create(data, body)

			console.log(`--------- END, downloadData /people/${body.id}`)

		} catch (e) {
			console.log(`An error was throwed ${e.message}`) //
			return false
		}
	}

	async function getDetail(req) {
		const { type, idPeople } = req.params

		const people = await findOne({ where: { id: idPeople } })

		return await Promise.all([people]).then(rsp => {
			return {
				data: rsp[0]
			}
		})
	}

	const create = async (data, body) => {
		if (!data) return false

		try {
			data = await parsePeople(data, body)
			await PeopleModel.create(data)
		} catch (error) {
			console.log(`Error: `, error.response)
		}
	}

	const parsePeople = async (data) => {
		emptyToNull(data)
		const people = {
			id: body.id,
			nombre: data.name,
			altura: data.height,
			masa: data.mass,
			colorCabello: data.hair_color,
			colorPiel: data.skin_color,
			colorOjos: data.eye_color,
			anioNacimiento: data.birth_year,
			genero: data.gender,
			mundoNatal: data.homeworld,
			//peliculas
			//especies
			//vehiculos
			//navesEstelares
			creado: data.created,
			editado: data.edited,
			url: data.url
		}
		return Promise.resolve(people)
	}

	const findOne = async (args) => PeopleModel.findOne(args)

	return {
		downloadData,
		getDetail
	}
}
