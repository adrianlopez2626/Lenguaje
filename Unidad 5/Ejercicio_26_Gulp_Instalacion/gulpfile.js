const { src, dest } = require('gulp');

function defaultTask(cb) {
  console.log('Gulp funcionando');
  cb();
}

exports.default = defaultTask;
