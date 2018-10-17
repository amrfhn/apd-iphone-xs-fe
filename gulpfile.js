var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    pug = require('gulp-pug'),
    gulpif = require('gulp-if'),
    extReplace = require('gulp-ext-replace'),
    packageJSON = require('./package.json'),
    configuration = require('./configuration.json'),
    concat = require('gulp-concat'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    pugInheritance = require('gulp-pug-inheritance'),
    minimist = require('minimist'),
    sassGlob = require('gulp-sass-glob');


// ================
// Setup Environment
// ============= 

var dist = 'dist/',
    base = './' + dist,
    min = '',
    production = false;

var options = minimist(process.argv.slice(2));

if (options.base) base = './';
if (options.min) min = '.min';
if (options.production) production = true;


var pugLocals = {
    siteTitle: packageJSON.name,
    siteDescription: packageJSON.description,
    siteLinks: configuration.links,
    base: base,
    min: min,
    gallery: []
};

// ================
// pug
// ============= 

gulp.task('pug', function() {
  return gulp.src([
    'src/pug/pages/**/*.pug',
    '!src/pug/pages/**/_*.pug'
  ]).pipe(plumber())
    .pipe(pug({
      locals: pugLocals,
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest(dist))
    .pipe(gulpif(production, gulp.dest(dist)))
    .pipe(browserSync.stream())

});

gulp.task('pugpages', function() {

    return gulp.src([
      'src/pug/pages/**/*.pug',
      '!src/pug/pages/**/_*.pug'
    ]).pipe(plumber())
      .pipe(changed(dist, {
        extension: '.html'
      }))
      .pipe(cached('pug'))
      .pipe(pugInheritance({
        basedir: 'src/pug/pages',
        skip: 'node_modules'
      }))
      .pipe(pug({
        locals: pugLocals,
        pretty: true
      }))
      .pipe(gulp.dest(dist))
      .pipe(browserSync.stream());
  
  });

/* ================
// scss
// ============= */

gulp.task('sass', function(){
  return gulp
      .src('src/sass/main.scss')
      .pipe(sassGlob())
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({
          stream: true
        }))
});

/*================
//browser sync
================*/

 gulp.task('browser-sync', function() {

    browserSync.init({
      logPrefix: packageJSON.name,
      ui: false,
      server: './dist',
      notify: {
        styles: {
          top: 'auto',
          bottom: '0',
          padding: '4px 8px',
          fontSize: '12px',
          borderBottomLeftRadius: '0'
        }
      }
    });
  
  })
  
  gulp.task('reload', function() {
  
    browserSync.reload();
  
  });


//=============
//compile js
//============
  
gulp.task('js', function() {

    return gulp.src([
      'src/js/0-vendor/*.js',
      'src/js/site/*.js',
      'src/js/components/*.js',
    ])
      .pipe(concat('main.js'))
      .pipe(gulp.dest(dist + 'js'))
      .pipe(browserSync.stream())
      .pipe(gulpif(production, uglify({
        mangle: false
      })))
      .pipe(gulpif(production, extReplace('.min.js')))
      .pipe(gulpif(production, gulp.dest(dist + 'js')))
      .pipe(gulpif(production, browserSync.stream()));
  
  });

/*================
//minify image
================*/

gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cached(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});



/*================
//useref
================

gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});


/*================
//fonts
================*/

gulp.task('fonts', function() {
  return gulp.src('src/fonts/*')
  .pipe(gulp.dest('dist/fonts'))
  .pipe(gulp.dest('dist/css/fonts'))
})


/* ================
// Reset Build
// ============= */

gulp.task('reset', function() {

  try {
    packageJSON = reload('./package.json');
    configuration = reload('./configuration.json');
    pugLocals.siteLinks = configuration.links;
  } catch (e) {
    console.error("Failed to reload package.json! Error: ", e);
  }

});

/*================
//delete
================*/

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

/*================
//watchers
================*/

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch(['configuration.json', 'package.json'], ['reset', 'build']);
    gulp.watch(['src/pug/**/*.pug', '!src/pug/pages/**/*.pug'], ['pug']);
    gulp.watch('src/pug/pages/**/*.pug', ['pugpages']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/images/**/*', ['images']);

  })

gulp.task('default', function (callback) {
  runSequence(['sass','browser-sync', 'watch'],
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'images', 'fonts','pug', 'js'],
    callback
  )
})
