const express = require('express')
const router = express.Router()
const utils = require('../common/utils')
/* GET home page. */
router.get('/', async function (req, res, next) {
  const token = req.cookies.accessToken
  if (token) {
    try {
      const payload = await utils.verifyToken(token)
      const { name } = payload
      res.render('index', { title: 'index', name, isLogin: true })
    } catch (err) {
      res.render('index', { title: 'index', name: 'guest', isLogin: false })
    }
  } else {
    res.render('index', { title: 'index', name: 'guest', isLogin: false })
  }
})
module.exports = router
