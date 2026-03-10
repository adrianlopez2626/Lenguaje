const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarCSS() {
    return src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

exports.css = compilarCSS;        

exports.default = function watchFiles() {
    watch('src/scss/*.scss', compilarCSS);
   
}
