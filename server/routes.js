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
    yql.query('select * from yahoo.finance.industry where id="112"', function(err, data) {
      if (err) { console.log('yql error:', err); }
      else {
        res.send(data);
      }
    });
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
