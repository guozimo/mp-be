const assignRes = require('./db/assignRes')
const examRes = require('./db/examRes')

exports.assign = async (ctx) => {
  ctx.body = assignRes
}


exports.getExamRes = async (ctx) => {
  ctx.body = examRes
}
