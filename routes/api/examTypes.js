const router = require('koa-router')()
const examTypes = require('../../app/controllers/examTypes')

router.get('/', examTypes.getExamTypeList)
module.exports = router
