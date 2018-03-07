const router = require('koa-router')()
const dailyPractice = require('../../app/controllers/dailyPractice.js')


router.get('/examPapers', dailyPractice.getDailyPracticeList)
// router.get('/home', users.getWelcomList)
// router.get('/me', users.getMyInformation)
// router.get('/push', users.getPushMsg)
