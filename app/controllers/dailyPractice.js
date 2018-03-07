const dailyPracticeList = require('./db/dailyPracticeList.js')
//
exports.getDailyPracticeList = async (ctx, next) => {
  ctx.body = dailyPracticeList
}
// exports.getWelcomList = async (ctx, next) => {
//   ctx.body = avatarList
// }
// exports.getMyInformation = async (ctx, next) => {
//   ctx.body = myInfo
// }
// exports.getPushMsg = async (ctx, next) => {
//   ctx.body = pushMsg
// }
// getSimulateList
