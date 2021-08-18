1. Create a package.json using npm init command
2.  npm install grunt --save-dev --> This install Grunt
    npm install grunt-contrib-watch --save-dev --> This install Grunt to watch js changes
    npm install grunt-contrib-concat --save-dev --> This install Grunt to concat all js 
    npm install grunt-contrib-jshint --save-dev --> This install Grunt jshint to find syntax error
3. package.json should contain all the dependencies
4. Create Gruntfile.js 
5. insert .jshintrc
6. Create js folders 
7. run grunt from the terminal to initiate Gruntfile.js which watches and then create cats.gen.js as a complete angularjs application
8. Make sure you insert cats.gen.js into your cats.module/.module
9. Look at https://angular-ui.github.io/bootstrap/ for more example
10. Pagination
11. Download the entire minified library from https://angular-ui.github.io/bootstrap/ into the vendor folder
12. See Markup example: https://angular-ui.github.io/bootstrap/#/pagination and paste it in the all-cats.tpl.php/.tpl.php
13. http://getbootstrap.com/customize/ - uncheck everything and make sure Pagination is checked
14. Insert into css
15. Delete uncessary css from bootstrap.css so there's no conflict with your theme
16. Make sure .tpl.php(View) is talking to cats.gen.js which contains the controller
