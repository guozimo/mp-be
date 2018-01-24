const locationList = require('./db/locations.js')
//
exports.getlocationList = async (ctx, next) => {
  ctx.body = locationList
}
