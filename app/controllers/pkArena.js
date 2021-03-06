const pkMe = require('./db/pkMe.js')
const pkMatch = require('./db/pkMatch.js')
const pkQuestions = require('./db/pkQuestions.js')
const pkAnswer = require('./db/pkAnswer.js')
const danGrdingTips = require('./db/danGrdingTips.js')
const pkFinal = require('./db/pkFinal.js')

exports.getMe = async (ctx, next) => {
  ctx.body = pkMe
}

exports.pkMatch = async (ctx, next) => {
  ctx.body = pkMatch
}
exports.pkQuestions = async (ctx, next) => {
  let { questionId } = ctx.query
  if (questionId === '0') {
    questionId = 1
  } else if (questionId === '') {
    questionId = 0
  } else {
    questionId = +questionId + 1
  }
  console.log(questionId)
  ctx.body = pkQuestions[questionId]
}
exports.pkAnswer = async (ctx, next) => {
  const { questionId } = ctx.request.body
  // console.log(questionId)
  ctx.body = pkAnswer[questionId % 5]
}
exports.danGrdingTips = async (ctx, next) => {
  ctx.body = danGrdingTips
}
exports.pkFinal = async (ctx, next) => {
  ctx.body = pkFinal
}

