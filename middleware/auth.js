const utils = require('../common/utils')
module.exports.info = async function (req, res, next) {
  const token = req.cookies.accessToken
  if (token) {
    try {
      const payload = await utils.verifyToken(token)
      setLocals(req, res, payload, true)
    } catch (err) {
      setLocals(req, res, null, false)
    }
  } else {
    setLocals(req, res, null, false)
  }
  next()
}
module.exports.auth = function (req, res, next) {
  if (!res.locals.isAuthenticated()) {
    res.redirect('/login')
  } else {
    next()
  }
}
module.exports.needLogout = function (req, res, next) {
  if (res.locals.isAuthenticated()) {
    res.redirect('/')
  } else {
    next()
  }
}
function setLocals (req, res, account, isAuthenticated) {
  res.locals = {
    path: req.path,
    get account () {
      return account
    },
    isAuthenticated: function () {
      return isAuthenticated
    }
  }
}
