const pool = []
module.exports.findByAccountId = async function (accountId) {
  return pool.filter(elem => {
    return elem.userId === accountId
  })
}
module.exports.findById = async function (id) {
  return pool[id]
}
module.exports.insert = async function (accountId, resume) {
  resume.id = pool.length
  resume.accountId = accountId
  pool.push(resume)
}
