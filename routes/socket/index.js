const WebSocketServer = require('ws').Server;
const ws = new WebSocketServer({
  port: 8084
});

ws.on('connection', function (s) {
  console.log('客户端已经链接啦')
  setTimeout(() => {
    s.send('123456')
  }, 500);
})
