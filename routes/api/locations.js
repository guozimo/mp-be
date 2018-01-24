const router = require('koa-router')()
const locations = require('../../app/controllers/locations')

router.get('/', locations.getlocationList)

module.exports = router
