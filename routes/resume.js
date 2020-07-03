const express = require('express')
const router = express.Router()
const resumeDao = require('../dal/resume')
/* GET Resumes page. */
router.get('/', async function (req, res, next) {
  const accountId = res.locals.account.id
  const resumes = await resumeDao.findByAccountId(accountId)
  res.render('resumes', { resumes })
})
router.post('/', async function (req, res, next) {
  const accountId = res.locals.account.id
  const resume = req.body
  await resumeDao.insert(accountId, resume)
  res.redirect('/')
})
module.exports = router
