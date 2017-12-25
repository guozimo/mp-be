const router = require('koa-router')()
const QuestionTypes = require('./QuestionTypes')

router.prefix('/api')

router.use('/questionTypes', QuestionTypes.routes(), QuestionTypes.allowedMethods())

router.get('/bar', (ctx, next) => {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
