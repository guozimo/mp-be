const router = require('koa-router')()

const userAnswer = require('../../app/controllers/userAnswer')

router.post('/', userAnswer.assign)
router.get('/:userAnswerId', userAnswer.getExamRes)

module.exports = router
