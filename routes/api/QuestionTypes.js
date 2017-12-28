const router = require('koa-router')()

const QuestionTypes = require('../../app/controllers/QuestionTypes')


router.get('/examQuestion/:answerPlanId', QuestionTypes.examQuestion)
router.get('/chapters', QuestionTypes.chapters)
//router.get('/collect/:chapterId', QuestionTypes.getCollectionList)
// router.get('/errors/:chapterId', QuestionTypes.getErrorList)
router.get('/myQuestionStem/:chapterId', QuestionTypes.getMycollectionOrError)
router.get('/examPapers', QuestionTypes.getSimulateList)
router.get('/examPapers/history', QuestionTypes.getHistoryList)
module.exports = router
