const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        //O SASS COM "OUTPUTSTYLE:COMPRESSED" COMPRIME O ARQUIVO CSS FINAL
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', {ignoereInitial: false} , gulp.parallel(styles))
}