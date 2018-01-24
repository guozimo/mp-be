const pkMe = require('./db/pkMe.js')
const pkMatch = require('./db/pkMatch.js')
const pkQuestions = require('./db/pkQuestions.js')
const pkAnswer = require('./db/pkAnswer.js')
const danGrdingTips = require('./db/danGrdingTips.js')
const pkFinal = require('./db/pkFinal.js')

//
exports.getMe = async (ctx, next) => {
  ctx.body = pkMe
}

exports.pkMatch = async (ctx, next) => {
  ctx.body = pkMatch
}
exports.pkQuestions = async (ctx, next) => {
  ctx.body = pkQuestions
}
exports.pkAnswer = async (ctx, next) => {
  ctx.body = pkAnswer
}
exports.danGrdingTips = async (ctx, next) => {
  ctx.body = danGrdingTips
}
exports.pkFinal = async (ctx, next) => {
  ctx.body = pkFinal
}
