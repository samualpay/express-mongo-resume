const jwt = require('jsonwebtoken')
const config = require('../config')
module.exports = {
  createToken: (payload, date) => {
    payload.exp = Math.floor(date.getTime() / 1000)
    const token = jwt.sign(payload, config.jwtSecret)
    return token
  },
  verifyToken: (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.jwtSecret, (err, payload) => {
        if (err) {
          reject(err)
        } else {
          resolve(payload)
        }
      })
    })
  },
  getDateLatter: (sec) => {
    return new Date(Date.now() + sec * 1000)
  }
}
