const router = require('koa-router')()

const userAnswer = require('../../app/controllers/userAnswer')

router.post('/', userAnswer.assign)

module.exports = router
