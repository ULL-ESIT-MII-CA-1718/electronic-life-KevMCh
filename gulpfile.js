var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["server"]);

gulp.task("preinstall", shell.task([
      "npm install -g static-server",
      "npm install -g phantomjs",
      "npm install -g jshint",
      "npm install -g html-lint",
      "npm install -g csslint"
]));

gulp.task("server", shell.task("static-server -p 8080"));

gulp.task("lint", shell.task([
      "jshint src/*.js",
      "html-lint *.html",
      "csslint stylesheets/*.css"
]));
