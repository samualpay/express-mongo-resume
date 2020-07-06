const express = require('express')
const router = express.Router()
const resumeDao = require('../dal/resume')
/* GET Resumes page. */
router.get('/type/:type/theme/:theme/:id', async function (req, res, next) {
  const type = req.params.type
  const theme = req.params.theme
  const id = parseInt(req.params.id)
  const resume = await resumeDao.findById(id)
  console.log(resume)
  res.render(`preview/type_${type}/theme_${theme}`, resume)
})
module.exports = router
