'use strict'

const defaults = require('defaults')
const asTrimmedString = (str, args) => {
  const { lowercase, uppercase } = defaults(args, { lowercase: false, uppercase: false })

  if (!(typeof str === 'string' || typeof str === 'number')) {
    return null
  }
  const value = str.toString().trim()
  if (!value.length) {
    return null
  }

  return lowercase ? value.toLowerCase() : (uppercase ? value.toUpperCase() : value)
}
const parseState = (state, args) => {
  const { tildes } = defaults(args, { tildes: false })
  state = state.toUpperCase()
  state = state.split(' ').filter(word => word.length).join(' ')
  if (!tildes) {
    state = state.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }
  return state
}

const isInteger = (value) => {
  return /^-{0,1}\d+$/.test(value)
}

function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function random (length) {
  return Math.random().toString(20).substr(2, length)
}

function getRandomNumber (args) {
  const { min, max } = defaults(args, { min: 100000000, max: 999999999 })
  return Math.floor(Math.random() * min) + max
}

module.exports = {
  isInteger,
  asTrimmedString,
  parseState,
  isNumeric,
  random,
  getRandomNumber
}
