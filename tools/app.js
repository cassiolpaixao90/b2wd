"use strict";

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';

const app = express();
const http = require("http").Server(app);
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

export default http;
