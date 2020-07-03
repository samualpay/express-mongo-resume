var express = require('express')
var router = express.Router()
const utils = require('../common/utils')
const config = require('../config')
const accountDao = require('../dal/account')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', {})
})
router.post('/', async function (req, res, next) {
  const account = req.body.account
  const password = req.body.password
  const accountEntity = await accountDao.findByAccount(account)
  if (accountEntity && account === accountEntity.account && password === accountEntity.password) {
    const exipreDate = utils.getDateLatter(config.loginExpireTime)
    const token = utils.createToken({ id: accountEntity.id, name: accountEntity.name }, exipreDate)
    res.cookie('accessToken', token, { expires: exipreDate, httpOnly: true })
    res.redirect('/')
  } else {
    res.render('login', { account, password, loginFailed: true })
  }
})

module.exports = router
