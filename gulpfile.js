/* eslint-disable import/no-commonjs, node/no-unpublished-require, import/max-dependencies, flowtype/require-return-type */
const {join} = require("path")
const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMyth = require("gulp-myth")
const gulpSize = require("gulp-size")
const gulpBabel = require("gulp-babel")
const browserify = require("browserify")
const babelify = require("babelify")
const envify = require("envify")
const vinylSourceStream = require("vinyl-source-stream")
const vinylBuffer = require("vinyl-buffer")
const gulpChanged = require("gulp-changed")
const gulpRename = require("gulp-rename")
const {production} = require("gulp-environments")

const DESINATION = "./tmp/"

gulp.task("build:@internal", () => {
  const destination = join(DESINATION, "@internal")

  return gulp.src([
    "./source/@internal/**/*.js",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpBabel())
    .pipe(gulpSize({
      title: "@internal",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:server", ["build:@internal"], () => {
  const destination = join(DESINATION, "server")

  return gulp.src([
    "./source/server/**/*.js",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpBabel())
    .pipe(gulpSize({
      title: "server",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:client", ["build:styles", "build:images", "build:assets"], () => {
  const destination = join(DESINATION, "client")

  return browserify({
    entries: "./source/client/index.js",
    transform: [
      [babelify, {ignore: "./source/**/test.js"}],
      envify,
    ],
  })
    .bundle()
    .pipe(vinylSourceStream("index.js"))
    .pipe(vinylBuffer())
    .pipe(production(gulp.dest(destination)))
    .pipe(gulpSize({
      title: "client",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:styles", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./node_modules/normalize.css/normalize.css",
    "./node_modules/firacode/distr/fira_code.css",
    "./node_modules/highlight.js/styles/agate.css",
    "./source/client/index.css",
  ])
    .pipe(gulpChanged(destination))
    .pipe(gulpConcat("index.css"))
    .pipe(gulpMyth())
    .pipe(production(gulp.dest(destination)))
    .pipe(gulpSize({
      title: "styles",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:environment", () => {
  const destination = join(DESINATION)

  return gulp.src("./application.env")
    .pipe(gulpChanged(destination))
    .pipe(production(gulp.dest(destination)))
    .pipe(gulpRename(".env"))
    .pipe(gulpSize({
      title: "environment",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:metadata", () => {
  const destination = join(DESINATION)

  return gulp.src("./package-application.json")
    .pipe(gulpChanged(destination))
    .pipe(production(gulp.dest(destination)))
    .pipe(gulpRename("package.json"))
    .pipe(gulpSize({
      title: "metadata",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:images", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./source/images/*.png",
    "./source/images/*.ico",
  ])
    .pipe(gulpChanged(destination))
    .pipe(production(gulp.dest(destination)))
    .pipe(gulpSize({
      title: "images",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:assets", () => {
  const destination = join(DESINATION, "client")

  return gulp.src([
    "./node_modules/firacode/distr/**/*",
    "./source/assets/browserconfig.xml",
    "./source/assets/manifest.json",
    "./source/assets/loadtestertool.xml",
    "./source/assets/babel-helpers.js",
    "./source/assets/index.html",
  ])
    .pipe(gulpChanged(destination))
    .pipe(production(gulp.dest(destination)))
    .pipe(gulpSize({
      title: "assets",
      showFiles: true,
    }))
    .pipe(gulp.dest(destination))
})

gulp.task("build:all", ["build:server", "build:client", "build:metadata", "build:environment"])
gulp.task("watch:all", ["build:server", "build:client", "build:metadata", "build:environment"], () => {
  gulp.watch("./source/server/**/*", ["build:server"])
  gulp.watch("./source/client/**/*", ["build:client"])
  gulp.watch("./source/@internal/**/*", ["build:server", "build:client"])
  gulp.watch("./package-application.json", ["build:metadata"])
  gulp.watch("./application.env", ["build:environment"])
})
