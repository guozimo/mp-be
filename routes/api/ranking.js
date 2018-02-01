const router = require('koa-router')()
const pkArena = require('../../app/controllers/ranking')

router.get('/pkArena', pkArena.getPkArena)


module.exports = router
