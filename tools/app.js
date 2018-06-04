"use strict";

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import configProd from '../webpack.config.prod';
import configDev from '../webpack.config.dev';
import compression from 'compression';
/* eslint-disable no-console */
const app = express();
const http = require("http").Server(app);
const compiler = webpack(configProd);
app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });


export default http;
