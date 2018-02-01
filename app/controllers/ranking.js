const pkArena = require('./db/pkArena')

exports.getPkArena = async (ctx, next) => {
  const { filter } = ctx.query
  let res
  if (filter === 'friends') {
    res = pkArena.friends
  } else {
    res = pkArena.nationwide
  }
  ctx.body = res
}
