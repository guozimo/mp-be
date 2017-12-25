const router = require('koa-router')()

const QuestionTypes = require('../../app/controllers/QuestionTypes')


router.get('/examQuestion/:answerPlanId', QuestionTypes.examQuestion)
router.get('/chapters', QuestionTypes.chapters)

module.exports = router
