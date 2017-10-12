var path = require('path');
// comes with node - separate install not needed

module.exports = {
  // start file for app ()
  entry: './app.index.js',
  // where we want transformed code to be put
  output: {
    // create a folder at level of this webpack file called 'dist'
    path: path.resolve(__dirname, 'dist'),
    // name for start file of transpiled code
    filename: 'index_bundle.js'
  },
  // transformations we want to make to our code
  module: {
    // test is a regular expression;
    // use  is the name of the npm module to run on such files.

    // 'bable-loader': turns JSX into JavaScript, and ES6 syntax into ES5
    //  actually, it looks inside package.json for a "babel" property to see what babel transformations to make ('env', and 'react' in our case)
    //  'env' transpiles our code, (eg. ES6 classes) giving support to the *currently latest version of javascript*, so it's always updating to the latest and greatest, at the time this script is run
    //  'react' transpiles the JSX to JavaScript (createElement invocations)

    // 'css-loader':  changes css `import" and "url('') (eg background image)"" references to JS "require('')" statements
    // ' style-loader':  inserts css styles into the page, so styles are active on the page
    // together, they enable us to use `require('./index.css');` in index.js
    rules: [
      { test: /\.(js)$/,  use: 'babel-loader' },
      { test: /\.(css)$/, use: [ 'style-loader', 'css-loader'] }
    ]
  }
}