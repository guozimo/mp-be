const examTypesList = require('./db/examTypeList')
//
exports.getExamTypeList = async (ctx, next) => {
  ctx.body = examTypesList
}
