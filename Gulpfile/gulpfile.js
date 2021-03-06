const gulp = require("gulp");
const sass = require("gulp-sass");
const imageMin = require("gulp-imagemin");
const minify = require('gulp-minify');


// Copy all HTML files to the Build folder
gulp.task('copyHTML', () =>
		gulp.src('src/**/*.html')
				.pipe(gulp.dest('build'))
);


// Copy and minify all JS files to the Build folder
gulp.task('compress', function() {
	gulp.src(['src/static/scripts/**/*.js'])
			.pipe(minify())
			.pipe(gulp.dest('build/static/scripts'))
});


// Switch the outputStyle to compressed for the production build
gulp.task('sass', () =>
		gulp.src('src/static/sass/**/*.sass')
				// .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
				.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
				.pipe(gulp.dest('build/static/css'))
				.pipe(gulp.dest('src/static/css'))
);


// Compress images
gulp.task('imageMin', () =>
		gulp.src('src/static/images/*')
				.pipe(imageMin([
					imageMin.gifsicle({interlaced: true}),
					imageMin.mozjpeg({quality: 75, progressive: true}),
					imageMin.optipng({optimizationLevel: 5}),
					imageMin.svgo({
						plugins: [
							{removeViewBox: true},
							{cleanupIDs: false}
						]
					})
				]))
				.pipe(gulp.dest('build/static/images'))
);


// Watch for changes
gulp.task('watch', function() {
	gulp.watch('src/static/sass/**/*.sass', gulp.series('sass'));
	gulp.watch('src/**/*.html', gulp.series('copyHTML'));
	gulp.watch('src/static/scripts/**/*.js', gulp.series('compress'));
	gulp.watch('src/static/images/*', gulp.series('imageMin'));
});
