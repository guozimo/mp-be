/**
 * @Author: luoquanquan
 * @Date: 2017-12-23 19:05:27
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2017-12-23 20:04:03
 */

const development_env = require('./dev.env')
const test_env = require('./test.env')

// 根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
module.exports = {
  development: development_env,
  test: test_env
}[process.env.NODE_ENV || 'development']
