const router = require('koa-router')()
const users = require('./users')
const examTypes = require('./examTypes')
const subjects = require('./subjects')
const QuestionTypes = require('./QuestionTypes')
const userAnswer = require('./userAnswer')
const answerPlans = require('./answerPlans')
const locations = require('./locations')

router.prefix('/api')

router.use('/users', users.routes(), users.allowedMethods())
router.use('/examTypes', examTypes.routes(), examTypes.allowedMethods())
router.use('/subjects', subjects.routes(), subjects.allowedMethods())
router.use('/questionTypes', QuestionTypes.routes(), QuestionTypes.allowedMethods())
router.use('/userAnswer', userAnswer.routes(), userAnswer.allowedMethods())
router.use('/answerPlans', answerPlans.routes(), answerPlans.allowedMethods())
router.use('/locations', locations.routes(), subjects.allowedMethods())
module.exports = router
