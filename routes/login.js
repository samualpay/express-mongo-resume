var express = require('express')
var router = express.Router()
const utils = require('../common/utils')
const config = require('../config')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', {})
})
router.post('/', function (req, res, next) {
  const account = req.body.account
  const password = req.body.password
  if (account === 'test' && password === 'test') {
    const exipreDate = utils.getDateLatter(config.loginExpireTime)
    const token = utils.createToken({ id: 1, name: 'test' }, exipreDate)
    res.cookie('accessToken', token, { expires: exipreDate, httpOnly: true })
    res.redirect('/')
  } else {
    res.render('login', { account, password, loginFailed: true })
  }
})

module.exports = router
