const express = require('express')
const router = express.Router()
/* GET Resumes page. */
router.get('/', async function (req, res, next) {
  res.render('resumes')
})
module.exports = router
