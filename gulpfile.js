var gulp = require("gulp"),
    gulputil = require("gulp-util"),
    watch = require("gulp-watch"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    bourbon = require("node-bourbon").includePaths,
    neat = require("node-neat").includePaths,
    minifyCSS = require("gulp-minify-css");

gulp.task("scripts", function() {
  gulp.src("js/*.js")
      .pipe(concat("main.min.js"))
      .pipe(uglify())
      .pipe(gulp.dest("js/min"));
});

gulp.task("styles", function() {
  gulp.src("scss/main.scss")
      .pipe(sass({
        includePaths: ["styles"].concat(bourbon)
                                .concat(neat)
      }))
      .pipe(minifyCSS())
      .pipe(gulp.dest("css/"));
});

gulp.task("watch", function() {
  gulp.watch("js/*.js", ["scripts"]);
  gulp.watch("scss/**/*.scss", ["styles"]);
});

gulp.task("default", ["scripts", "styles", "watch"]);

