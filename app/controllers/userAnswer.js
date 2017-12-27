const assignRes = require('./db/assignRes')

exports.assign = async (ctx) => {
  ctx.body = assignRes
}
