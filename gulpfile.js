const gulp=require('gulp');
const uglify=require('gulp-uglify');
const sass=require('gulp-sass');
const concat=require('gulp-concat');

gulp.task('message',function(){
    return console.log('gulp is running');
});

//copy all html files
gulp.task('copyHtml',function(){
   gulp.src('src/*.html')
       .pipe(gulp.dest('dist'));
});

//minify js
// gulp.task('minify',function(){
//     gulp.src('src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

//compile scss
gulp.task('sass',function(){
    return gulp.src('src/stylesheets/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('dist/css'));
});
//concate
gulp.task('script',function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//default
gulp.task('default',['copyHtml','sass','script']);

//watch
gulp.task('watch',function(){
   gulp.watch('src/js/*.js',['script']);
   gulp.watch('src/stylesheets/*.scss',['sass']);
   gulp.watch('src/*.html',['copyHtml']);
});