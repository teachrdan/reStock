/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var yqlient = require('yqlient');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.get('/api/yql', function(req, res) {
    var yql = new yqlient.initYQL();
    yql.query('select Symbol, Ask from yahoo.finance.quotes where
    symbol in ("YHOO","AAPL","GOOG","MSFT")', function(err, data) {
      if (err) { console.log(err); }
      else { console.log(data); }
    });
    // res.send(response from yql call)
  });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};

// module.exports router?
