const testTypeList = require('./db/testTypeList')
const avatarList = require('./db/avatarList')
const myInfo = require('./db/myInfo')
const pushMsg = require('./db/pushMsg')
//
exports.getTestList = async (ctx, next) => {
  ctx.body = testTypeList
}
exports.getWelcomList = async (ctx, next) => {
  ctx.body = avatarList
}
exports.getMyInformation = async (ctx, next) => {
  ctx.body = myInfo
}
exports.getPushMsg = async (ctx, next) => {
  ctx.body = pushMsg
}
// getSimulateList
