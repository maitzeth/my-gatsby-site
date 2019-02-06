const NProgress = require('nprogress')

exports.onPreRouteUpdate = () => {
  NProgress.start();
}

exports.onRouteUpdate = () => {
  NProgress.done();
}