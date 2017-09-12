const http = require('http');
const path = require('path');
const express = require('express');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleWare = require('webpack-hot-middleware');
const open = require("open");
const app = express();
const compression = require('compression')
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const isMock = !!process.env.MOCK_SERVER;
if (isMock) {
  console.log('Using mock server...');
}
proxy.on('error', function (e) {
  console.log(e);
  console.log('@@//代理服务器错误!');
});
//gzip,分块传输
app.use(compression());

app.use(express.static('build'));

//api接口代理
app.all(/^\/api\/(.*)/, (req, res) => {
  if (isMock) {
    //Mock服务器
    proxy.web(req, res, { target: 'http://localhost:3011' });
  } else {
    //默认服务器
    proxy.web(req, res, { target: 'http://localhost:5000' });
  }
});

let port = process.env.PORT || 8800;//端口
const server = http.createServer(app);
server.listen(port, () => {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
  open(`http://localhost:${port}/`, 'chrome');
});
