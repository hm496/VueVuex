const http = require('http');
const path = require('path');
const express = require('express');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleWare = require('webpack-hot-middleware');
const open = require("open");
const app = express();
const compression = require('compression')
const httpProxy = require('http-proxy');

const ProxyConfig = require('./ProxyConfig');

const proxy = httpProxy.createProxyServer({});
const isMock = !!process.env.MOCK_SERVER;
if (isMock) {
  console.log('Using mock server...');
}
proxy.on('error', function (err, req, res) {
  console.log(err);
  console.log('@@//代理服务器错误!');
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong. And we are reporting a custom error message.');
});
//gzip,分块传输
app.use(compression());

app.use(express.static('build'));
app.use(express.static('mock'));

//获取api地址前缀
const serverPath = require('./src/utils/serverPath');
//api接口代理
const apiRegExp = new RegExp(`^\/${serverPath.prefix}\/(.*)`, 'i');
app.all(apiRegExp, (req, res) => {
  console.log("请求接口:", req.url);
  if (isMock) {
    //Mock服务器
    proxy.web(req, res, { target: ProxyConfig.mockServer });
  } else {
    //proxy服务器
    proxy.web(req, res, { target: ProxyConfig.proxyServer });
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
