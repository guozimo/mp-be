const testTypeList = require('./db/testTypeList')
const avatarList = require('./db/avatarList')
// 
exports.getTestList = async (ctx, next) => {
  ctx.body = testTypeList
}
exports.getWelcomList = async (ctx, next) => {
  ctx.body = avatarList
}

// getSimulateList