const subjectsList = require('./db/subjectsList')
//
exports.getProjectList = async (ctx, next) => {
  ctx.body = subjectsList
}
