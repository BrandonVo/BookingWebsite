/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
var port = process.env.PORT || 8080;
const app = express();
const router = express.Router()
var db = require('./queries')
var bodyParser = require('body-parser')

router.get('/booking', db.getAllBookings);
router.post('/booking', db.createBooking);
router.delete('/booking', db.deleteBooking);
router.put('/booking', db.updateBooking);

router.get('/company', db.getAllCompanies);
router.post('/company', db.createCompany);
router.delete('/company', db.deleteCompany);
router.put('/company', db.updateCompany);

router.get('/tour', db.getAllTours);
router.post('/tour', db.createTour);
router.delete('/tour', db.deleteTour);
router.put('/tour', db.updateTour);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use('/api', router);


if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(error) {
  if (error) {
    console.log(error);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
