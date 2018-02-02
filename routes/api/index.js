const router = require('koa-router')()
const users = require('./users')
const examTypes = require('./examTypes')
const subjects = require('./subjects')

const QuestionTypes = require('./QuestionTypes')
const userAnswer = require('./userAnswer')
const answerPlans = require('./answerPlans')
const locations = require('./locations')
const pkArena = require('./pkArena')
const ranking = require('./ranking')
// /pkArena/pkQuestions

router.prefix('/api')

router.use('/users', users.routes(), users.allowedMethods())
router.use('/examTypes', examTypes.routes(), examTypes.allowedMethods())
router.use('/subjects', subjects.routes(), subjects.allowedMethods())
router.use('/questionTypes', QuestionTypes.routes(), QuestionTypes.allowedMethods())
router.use('/userAnswer', userAnswer.routes(), userAnswer.allowedMethods())
router.use('/answerPlans', answerPlans.routes(), answerPlans.allowedMethods())
router.use('/locations', locations.routes(), subjects.allowedMethods())
router.use('/pkArena', pkArena.routes(), pkArena.allowedMethods())
router.use('/ranking', ranking.routes(), ranking.allowedMethods())
module.exports = router
