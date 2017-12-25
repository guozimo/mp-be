/**
 * @Author: luoquanquan
 * @Date: 2017-12-23 19:43:50
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2017-12-23 23:05:36
 */

const examQuestion = require('./db/examQuestion')
// 输出考试列表
exports.examQuestion = async (ctx, next) => {
  ctx.body = examQuestion
}

//
