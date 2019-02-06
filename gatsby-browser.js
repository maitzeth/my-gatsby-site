const NProgress = require('nprogress')

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  NProgress.start();
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  NProgress.done();
}
