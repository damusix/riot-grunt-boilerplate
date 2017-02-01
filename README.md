# Riot Grunt Boilerplate

### Grunt workflow boilerplate for RiotJS.

Comes with:
- Gruntfile configured for RiotJS and SCSS.
- Browserify transpiled to ES5 using BabelJS.
- Browser testing with PhantomJS.


Riot Tags and your `client/app.js` file are compiled together using Browserify, and transpiled to ES5 using BabelJS, so yes, you can use ES6.

All your js, tag, and scss files are found in `client/`. Everything compiles out to `public/app.js` and `public/app.css`. Best advice is to build your stuff in component folders. Look at `client/example-component` for a reference example.

Comes ready with frontend testing using mocha, chai, karma, and phantomjs. Simply run `npm test`, and karma will start. [You must have phantomjs installed][1].

Sometimes, all you need to do is compile SCSS. Multiple grunt tasks for different use cases: `grunt` by itself will compile, and watch for changes; `grunt css` will only compiled SCSS; `grunt js` will only compile JS; and `grunt build` will compile everything, but not watch. So for you continuous integration scripts, you would use `grunt build`.


[1]: http://phantomjs.org/download.html
