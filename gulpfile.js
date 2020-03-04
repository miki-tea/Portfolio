const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

gulp.task("watch", () => {
  return (gulp.watch("src/scss/**/*.scss", () => {
    return (
      gulp.src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
    );
  }));
});

gulp.task("webpack", () => {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("dist/js"));
});

gulp.task("default", gulp.series("webpack", "watch", function (done) {
  done();
}));