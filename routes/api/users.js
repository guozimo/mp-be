const router = require('koa-router')()
const users = require('../../app/controllers/users')


router.get('/examPapers', users.getTestList)
router.get('/home', users.getWelcomList)
router.get('/me', users.getMyInformation)
router.get('/push', users.getPushMsg)
// router.get('/chapters', QuestionTypes.chapters)

module.exports = router
