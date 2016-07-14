REM Bower
npm install -g bower
rem create bower.json
rem bower init
bower install bootstrap -S
bower install font-awesome -S
bower install

REM ------------------------------------------------------------------------------
REM GRUNT
REM ------------------------------------------------------------------------------
npm install -g grunt-cli
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
npm install jshint-stylish --save-dev
npm install time-grunt --save-dev
npm install jit-grunt --save-dev
grunt
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-filerev --save-dev
npm install grunt-usemin --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-connect --save-dev
grunt serve

REM ------------------------------------------------------------------------------
REM GULP
REM ------------------------------------------------------------------------------
npm install -g gulp
npm install gulp --save-dev
npm install jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev
gulp
gulp watch
REM --- Angular Scope
npm install gulp-ng-annotate --save-dev


REM HOW TO SET PROXY
REM %1 represents the password
REM set http_proxy=http://mitrali:%1@158.169.131.13:8012