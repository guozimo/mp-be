const router = require('koa-router')()

const answerPlans = require('../../app/controllers/answerPlans')


router.get('/', answerPlans.getAnswerPlans)
module.exports = router
