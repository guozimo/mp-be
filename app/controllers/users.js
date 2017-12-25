const testTypeList = require('./db/testTypeList')
const avatarList = require('./db/avatarList')
const myInfo = require('./db/myInfo')
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
// getSimulateList