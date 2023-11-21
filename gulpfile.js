const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

// Sass

gulp.task("sass", function(done){
    return gulp
            .src('./src/scss/main.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(cssnano())
            .pipe(sourcemaps.write("."))
            .pipe(rename(function(path){
                if(!path.extname.endsWith(".map")){
                    path.basename += '.min';
                }
            }))
            .pipe(gulp.dest('./dist/css'));
    done();
});

//js minification

gulp.task("javascript", function(done){
    return(
        gulp
            .src('./src/js/**/*.js')
            .pipe(uglify())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./dist/js'))
    )
    done();
});

// Watch with browserSync

gulp.task("watch", function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp
        .watch(
            ["./src/scss/**/*.scss", "**/*.html", "./src/js/**/*.js"],
            gulp.series(["sass", "javascript"]))
        .on('change', browserSync.reload)
});

//gulp default command 

gulp.task("default", gulp.series(["watch"]));