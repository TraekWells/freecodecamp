const gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  browserSync = require("browser-sync");

function scss() {
  return gulp
    .src("./scss/**.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest("./css"));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**.scss", scss);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./scss/**.scss").on("change", browserSync.reload);
}

exports.watch = watch;
