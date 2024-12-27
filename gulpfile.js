const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe (uglify())
    .pipe (gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        //O SASS COM "OUTPUTSTYLE:COMPRESSED" COMPRIME O ARQUIVO CSS FINAL
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    //"**" = PROCURA NAS PASTAS E SUBPASTAS - "*" = ENCONTRA QUALQUER ARQUIVO -- "../" = SAI DA PASTA
    return gulp.src('./src/images/**/*') 
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', {ignoereInitial: false} , gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}