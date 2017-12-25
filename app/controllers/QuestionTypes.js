/**
 * @Author: luoquanquan
 * @Date: 2017-12-23 19:43:50
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2017-12-25 12:45:55
 */

const examQuestion = require('./db/examQuestion')
const chapters = require('./db/chapters')
// 输出考试列表
exports.examQuestion = async (ctx, next) => {
  ctx.body = examQuestion
}

// 章节列表
exports.chapters = async (ctx, next) => {
  ctx.body = chapters
}
