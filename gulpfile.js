/**
 * @file
 * Gulpfile
 */

var gulp        = require('gulp'),
  bump        = require('gulp-bump'),
  clean       = require('gulp-clean'),
  concat      = require('gulp-concat'),
  browserSync = require('browser-sync'),
  browserSyncReload = browserSync.reload,
  cssmin      = require('gulp-cssmin'),
  filter      = require('gulp-filter'),
  git         = require('gulp-git'),
  gulpif      = require('gulp-if'),
  imagemin    = require('gulp-imagemin'),
  rename      = require('gulp-rename'),
  sass        = require('gulp-sass'),
  spritesmith = require('gulp.spritesmith'),
  buffer      = require('vinyl-buffer'),
  merge        = require('merge-stream'),
  shell       = require('gulp-shell'),
  tagversion  = require('gulp-tag-version'),
  uglify      = require('gulp-uglify'),
  sassGlob    = require('gulp-sass-glob'),
  notify      = require('gulp-notify');
  config      = require('./build.config.json');

// Trigger
var production;

// Task: Clean:before
// Description: Removing assets files before running other tasks
gulp.task('_clean:before', function () {
  return gulp.src(
    config.assets.dest
  )
    .pipe(clean({
      force: true
    }))
});

// generate sprite.png and _sprite.scss
gulp.task('sprite', function () {
  var spriteData = gulp.src('static/source/img/sprite_source/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: '../img/sprite.png'
  }));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('static/source/img/'));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(gulp.dest('static/source/scss'));

  return merge(imgStream, cssStream);
});

// Task: Handle scripts
gulp.task('_scripts', function () {
  return gulp.src(config.scripts.files)
    .pipe(concat(
      'application.js'
    ))
    .pipe(gulpif(production, uglify()))
    .pipe(gulpif(production, rename({
      suffix: '.min'
    })))
    .pipe(gulp.dest(
      config.scripts.dest
    ))
    .pipe(browserSyncReload({stream:true}));
});

// Task: Handle fonts
gulp.task('_fonts', function () {
  return gulp.src(config.fonts.files)
    .pipe(gulp.dest(
      config.fonts.dest
    ))
    .pipe(browserSyncReload({stream:true}));
});

// Task: Handle images
gulp.task('_images', function () {
  return gulp.src(config.images.files)
    .pipe(gulpif(production, imagemin()))
    .pipe(gulp.dest(
      config.images.dest
    ))
    .pipe(browserSyncReload({stream:true}));
});

// Task: Handle Sass and CSS
gulp.task('_sass', function () {
  return gulp.src(config.scss.files)
    .pipe(sassGlob())
    .pipe(sass())
    //.pipe(compass({
    //  config_file: 'sites/all/themes/tsitaatcom_theme/config.rb',
    //  css:  './sites/all/themes/tsitaatcom_theme/public',
    //  sass: './sites/all/themes/tsitaatcom_theme/source/scss',
    //  image: './sites/all/themes/tsitaatcom_theme/source/img',
    //}))
    .on('error', notify.onError(function(err) {
      return 'SASS compilation error: ' + err.message;
    }))
    .pipe(gulpif(production, cssmin()))
    .pipe(gulpif(production, rename({
      suffix: '.min'
    })))
    .pipe(gulp.dest(
      config.scss.dest
    ))
    .pipe(browserSyncReload({stream: true}));
});

// task: BrowserSync
// Description: Run BrowserSync server with disabled ghost mode
gulp.task('_browser-sync', function() {
  browserSync({
    server: {
      baseDir: config.root
    },
    ghostMode: true,
    open: "external"
  });
});

// Task: Watch files
gulp.task('_watch', function () {
  gulp.start('default');

  // Watch scripts
  gulp.watch(
    config.scripts.files,
    ['_scripts']
  );

  // Watch images
  gulp.watch(
    config.images.files,
    ['_images']
  );

  // Watch Sass
  gulp.watch(
    config.scss.files,
    ['_sass']
  );

  // Watch fonts
  gulp.watch(
    config.fonts.files,
    ['_fonts']
  );
});

// Task: Default
// Description: Build all stuff of the project once
gulp.task('default', ['_clean:before', '_serve'], function () {
  production = false;

  gulp.start(
    '_fonts',
    '_sass',
    '_images',
    '_scripts'
  );
});

gulp.task('_serve', function() {
  production = false;

  browserSync({
    proxy: "tsitaat.dev",
    open: "external"
  });

  gulp.start(
    '_sass',
    '_watch'
  );
});

// Task: Deploy static content
// Description: Deploy static content using rsync shell command
gulp.task('deploy', function () {
  return gulp.src(config.deployment.local.path, {read: false})
    .pipe(shell([
      'rsync '+ config.deployment.rsync.options +' '+ config.deployment.local.path +'/ '+ config.deployment.remote.host
    ]))
});

// Function: Releasing (Bump & Tagging)
// Description: Bump npm versions, create Git tag and push to origin
gulp.task('release', function () {
  production = true;

  return gulp.src(config.versioning.files)
    .pipe(bump({
      type: gulp.env.type || 'patch'
    }))
    .pipe(gulp.dest('./'))
    .pipe(git.commit('Release a ' + gulp.env.type + '-update'))

    // read only one file to get version number
    .pipe(filter('package.json'))

    // Tag it
    .pipe(tagversion())

    // Publish files and tags to endpoint
    .pipe(shell([
      'git push origin develop',
      'git push origin --tags'
    ]));
});
