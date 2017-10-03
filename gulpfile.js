var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

gulp.task("preinstall", shell.task([
      "npm install -g static-server",
      "npm install -g phantomjs",
      "npm install -g jshint",
      "npm install -g html-lint",
      "npm install -g csslint"
]));

gulp.task("serve", shell.task("static-server -p 8080"));

gulp.task("test", shell.task("./node_modules/mocha/bin/mocha --require should"));

gulp.task("lint", shell.task([
      "jshint src/*.js",
      "html-lint *.html",
      "csslint stylesheets/*.css"
]));
