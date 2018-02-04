const router = require('koa-router')()
const pkArena = require('../../app/controllers/pkArena')

router.get('/me', pkArena.getMe)
router.get('/pkMatch', pkArena.pkMatch)
router.get('/pkQuestions', pkArena.pkQuestions)
router.post('/pkAnswer', pkArena.pkAnswer)
router.get('/danGrdingTips', pkArena.danGrdingTips)
router.get('/pkFinal', pkArena.pkFinal)
router.get('/pkMatch', pkArena.pkMatch)
router.get('/pkMatch', pkArena.pkQuestions)
router.get('/test', (ctx) => {
  ctx.body = 'test'
})


module.exports = router
