const http = require('http');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleWare = require('webpack-hot-middleware');
const open = require("open");
const app = express();
const compiler = webpack(config);
const compression = require('compression')
const httpProxy = require('http-proxy');

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

let webpackDevOptions = {
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  stats: {
    colors: true,
    chunks: false
  },
  quiet: true
};

//路由
app.use(compression());

app.use(devMiddleWare(compiler, webpackDevOptions));
app.use(hotMiddleWare(compiler, {
  log: false,
  heartbeat: 2000
}));
app.use(express.static('static'));

//获取api地址前缀
const serverPath = require('./src/utils/serverPath');
//api接口代理
const apiRegExp = new RegExp(`^\/${serverPath.prefix}\/(.*)`, 'i');

app.all(apiRegExp, (req, res) => {
  if (true) {
    //Mock服务器
    console.log('Mock服务器');
    proxy.web(req, res, { target: 'http://localhost:8800' });
  } else {
    //proxy服务器
    console.log('proxy服务器');
    proxy.web(req, res, { target: 'http://172.16.0.25:5000/' });
  }
});

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

let port = process.env.PORT || 3000;//端口
const server = http.createServer(app);
server.listen(port, () => {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
  open(`http://localhost:${port}/`, 'chrome');
});

/*
Express  ---  app.listen
app.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${port}/`);
  open(`http://localhost:${port}/`, 'chrome');
});*/