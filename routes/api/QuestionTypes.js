const router = require('koa-router')()

const QuestionTypes = require('../../app/controllers/QuestionTypes')


router.get('/examQuestion/:answerPlanId', QuestionTypes.examQuestion)

module.exports = router
