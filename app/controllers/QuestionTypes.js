/**
 * @Author: luoquanquan
 * @Date: 2017-12-23 19:43:50
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2017-12-26 15:33:02
 */

const examQuestion = require('./db/examQuestion')
const chapters = require('./db/chapters')
const mycollectionOrErrorList = require('./db/collectionList')
const simulateList = require('./db/simulateList')
const historyList = require('./db/historyList')
// 输出考试列表
exports.examQuestion = async (ctx, next) => {
  ctx.body = examQuestion
}

// 章节列表
exports.chapters = async (ctx, next) => {
  ctx.body = chapters
}
// // 我的收藏二级列表
// exports.getCollectionList = async (ctx, next) => {
//   ctx.body = CollectionList
// }
// // 我的错题二级列表
// exports.getErrorList = async (ctx, next) => {
//   ctx.body = errorList
// }

exports.getMycollectionOrError = async (ctx, next) => {
    ctx.body = mycollectionOrErrorList
  }
exports.getSimulateList = async (ctx, next) => {
  ctx.body = simulateList
}
exports.getHistoryList = async (ctx, next) => {
  ctx.body = historyList
}
