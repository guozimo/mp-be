const router = require('koa-router')()
const subjects = require('../../app/controllers/subjects')

router.get('/', subjects.getProjectList)

module.exports = router
