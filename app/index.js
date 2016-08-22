var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = 'd086ae82c6854b5caad54b5f947876d4';
var sentryApp = '93379';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
};

window.onerror = function() {
  Raven.showReportDialog();
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install()

ReactDOM.render(
  routes,
  document.getElementById('app')
);
