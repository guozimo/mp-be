const examTypesList = require('./db/examTypeList')
//
exports.getexamTypesList = async (ctx, next) => {
  ctx.body = examTypesList
}
