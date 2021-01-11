'use strict'

const { config } = require('../config')
const express = require('express')
const asyncify = require('express-asyncify')
const migration = require('../utils/Migration')
const { send } = require('../network/response')
const db = require('../db')
const people = require('../lib/People')
const planet = require('../lib/Planet')

let services

const api = asyncify(express.Router())
const dbconfig = Object.assign(config, { logging: console.log })

api.use('*', async (req, res, next) => {
  res.removeHeader('X-Powered-By')
  if (!services) {
    try {
      services = await db(dbconfig)
    } catch (e) {
      return next(e)
    }
  }
  req._services = services
  return next()
})

api.post('/guardar', async function (req, res, next) {
  try {
    let data, flag = req.body.model

    if (flag === 'persona') {
      data = await people.downloadData(req.body)
    }
    if (flag === 'planeta') {
      data = await planet.downloadData(req.body)
    }

    //const data = await migration.serve(req.query, req.body)
    return send({
      req, res,
      body: data
    })
  } catch (e) {
    return next(e)
  }
})

api.get('/guerraDeLasGalaxiasAPI', async function (req, res, next) {
  const query = req.query
  let data, error
  try {
    const { type, id } = req.params

    if (type === 'persona') {
      data = await people.getDetail(req)
        .catch((e) => {
          error = {
            success: false,
            message: e.message,
            code: e.code || 600,
            stack: e.stack
          }
        })
    }

    if (type === 'planeta') {
      date = await planet.getDetail(req)
        .catch((e) => {
          error = {
            success: false,
            message: e.message,
            code: e.code || 600,
            stack: e.stack
          }
        })
    }

    if (error) {
      return res.status(400).send(error)
    }

    return res.send({
      success: true,
      data
    })
  } catch (e) {
    resolveError(res, e)
  }
})

//export default api
module.exports = api
