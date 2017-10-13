var path = require('path');
// comes with node - separate install not needed

var HtmlWebpackPlugin = require('html-webpack-plugin');
// creates an HTML file for us, based on a template HTML file we give it
// Puts this HTML file in our 'dist' (output location)
// AND inserts <script> 'index_bundle.js' (transpiled JS filename) to HTML file
// see "plugins" property below

module.exports = {
  // start file for app ()
  entry: './app/index.js',

  // where we want transformed code to be put
  output: {
    // create a folder at level of this webpack file called 'dist'
    path: path.resolve(__dirname, 'dist'),
    // name for start file of transpiled code
    filename: 'index_bundle.js'
  },

  // transformations we want to make to our code

    // test is a regular expression to match filename extensions;
    // use  is the name of the npm module to run on such files.

    // 'bable-loader': turns JSX into JavaScript, and ES6 syntax into ES5
    //  actually, it looks inside package.json for a "babel" property to see what babel transformations to make ('env', and 'react' in our case)
    //  'env' transpiles our code, (eg. ES6 classes) giving support to the *currently latest version of javascript*, so it's always updating to the latest and greatest, at the time this script is run
    //  'react' transpiles the JSX to JavaScript (createElement invocations)

    // 'css-loader':  changes css `import" and "url('') (eg background image)"" references to JS "require('')" statements
    // ' style-loader':  inserts css styles into the page, so styles are active on the page
    // together, they enable us to use `require('./index.css');` in index.js

    // exclude node_modules directory to avoid error:
    //  “The code generator has deoptimised the styling of [some file] as it exceeds the max of ”500KB“
    // https://stackoverflow.com/questions/29576341/what-does-the-code-generator-has-deoptimised-the-styling-of-some-file-as-it-e

  module: {
      rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/,  use: [ 'style-loader', 'css-loader'] }
    ]
  },

  // creates our dist/index.html and adds 'index_bundle.js' script to it,
  //   based on  app/index.html
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};