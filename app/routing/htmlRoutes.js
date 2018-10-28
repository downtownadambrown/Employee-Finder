// ===============================================================================
// DEPENDENCIES
// ===============================================================================
const path = require('path');

// ===============================================================================
// ROUTING - HTML GET Requests
// ===============================================================================

module.exports = function(app) {
  app.get('/survey', function(req, res) {
    /* res.set('Content-Type', 'text/html; charset=utf-8'); */
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // If no matching route is found default to home
  app.get('*', function(req, res) {
    /* res.set('Content-Type', 'text/html; charset=utf-8'); */
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  app.get('/js/survey.js', function(req, res) {
    res.set('Content-Type', 'application/javascript; charset=utf-8'); 
    res.sendFile(path.join(__dirname, '../public/js/survey.js'));
  });
};