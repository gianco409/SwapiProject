'use strict'
const haltOnTimedout = (req, res, next) => {
    if (!req.timedout) return next()
  }
  
const isTimedOut = (req) => req.timedout
  
module.exports = {
  haltOnTimedout,
  isTimedOut
}
  