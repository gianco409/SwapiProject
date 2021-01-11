'use strict'

const { isTimedOut } = require('../utils/TimedOut')
const { isInteger } = require('../utils/String')

const send = ({ req, res, status, body }) => {
  status = isInteger(status) ? status : 200
  body = body || {}

  if (!isTimedOut(req)) return res.status(status).send(body)
}

module.exports = {
  send
}