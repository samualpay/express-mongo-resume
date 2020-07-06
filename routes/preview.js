const express = require('express')
const router = express.Router()
/* GET Resumes page. */
router.get('/type/:type/theme/:theme/:id', async function (req, res, next) {
  const type = req.params.type
  const theme = req.params.theme
  // const id = req.params.id
  res.render(`preview/type_${type}/theme_${theme}`)
})
module.exports = router
