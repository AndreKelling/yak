const gulp 	= require('gulp'),
    sass 	= require('gulp-sass'),
    concat 	= require('gulp-concat'),
    uglify 	= require('gulp-uglify'),
    util    = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps');

const config = {
    production: !!util.env.production
};


const paths = {
    styles: {
        src: 'assets/styles/*.scss',
        dest: 'public/resources/css/'
    },
    scripts: {
        src: ['assets/scripts/jquery/jquery-3.3.1.js', 'assets/scripts/*.js'], // the order that redaxo-demo is loaded as last is currently right, but not bulletproof
        dest: 'public/resources/js/'
    }
};

function styles() {
    return gulp
        .src(paths.styles.src)
        .pipe(!config.production ? sourcemaps.init({loadMaps: true}) : util.noop())
        .pipe(sass().on('error', sass.logError))
        .pipe(!config.production ? sourcemaps.write('.') : util.noop())
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp
        .src(paths.scripts.src, {
            sourcemaps: true
        })
        .pipe(config.production ? uglify() : util.noop())
        .pipe(!config.production ? sourcemaps.init({loadMaps: true}) : util.noop())
        .pipe(concat('main.min.js'))
        .pipe(!config.production ? sourcemaps.write('.') : util.noop())
        .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);

    gulp.watch(paths.styles.src, styles);
}

const build = gulp.parallel(styles, scripts);

gulp.task('build', build);

gulp.task('default', gulp.series(build, watch));