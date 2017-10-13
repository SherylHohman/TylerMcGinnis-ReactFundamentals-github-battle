GitHub-Battle  

React-Tutorial  
https://learn.tylermcginnis.com/courses  
React Fundamentals Course  
https://github.com/tylermcginnis/React-Fundamentals  

my github repo for this project is :  
https://github.com/SherylHohman/TylerMcGinnis-ReactFundamentals-github-battle  

## Getting Started - From Scratch    

### Add app dependencies | init as a node project (app)   
First command: (creates `package.json`)    

    npm init

Second command: (creates `node_modules`)    

    npm install --save react react-dom

Third - .gitignore: 

    node_modules
    dist  

### First React Component (`index.js`) and initial file structure  

    ./app
    ./app/index.css
    ./app/index.js

### Add dev dependencies: `webpack, babel, loaders, dev-server, html-webpack..`      
Fourth command:      

    npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server  

### Webpack configuration (and package.json): **Part 1 Transpiling Code**  
`webpack.config.js`  rules for transpiling and transforming code   
  - `entry`  : file that starts the app  
  - `output` : folder and file that transpiled code should be placed  
  - `module: { rules: [] }`: loaders/transformation rules  
    - rules array is a dict: `{test: /.(ext)$/, use: ''}`
    - where `test` is a regex to match filename (extensions):  
    - and   `use` is a `string`, or a list of strings: `['x-loader', 'y-loader']`
    
**JS transpiling**  
`babel-loader` looks in `package.json` to see which which babel loaders to use:    
package.json add:  
`"babel": { "presets": ["env", "react"] }` to run  
`babel-presets-react`: transpile JSX into JavaScript    
`babel-presets-env`  : transpiles latest version of JS to current JS    
  (eg ES6 classes used by react)   
 
**CSS transpiling**  
`css-loader` (turn css `import` and `url()` into JS `require('')` statements)  
`style-loader` inserts our styles, `index.css` into the app    
now, `require(./index.css);` in  `index.js` becomes valid code.  

### Webpack configuration, HTML: **Part 2 Creating `dist/index.html`**  
**app/index.html**  
Create an `app/index.html` that has a (div) tag with `id="app"`, as our
index.js states to insert our React App code here:  
`ReactDOM.render( <App />, document.getElementByID('app'));`

**Webpack**: create **dist/index.html**, embed **index_bundle.js** script 
This will look copy `index.html` from `app` folder to `dist` folder, and
insert a script tag to include `index_bundle.js` (defined in webpack's "output"' property) to the html file.

    var HtmlWebpackPlugin = require('html-webpack-plugin');
    plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
    })]`

### npm  `run` script: Part 1 run webpack  
package.json add property:  
`"scripts": {"create": "webpack"}`   
Tells npm to run the webpack script, which transpiles code as described above.  

`npm run create`: run the script.   
Notice: `dist` folder, `dist/index.html`, `dist/index_bundle.js` are created  

>*fixed typo in webpack.config.js `./app/index.js` not `./app.index.js`*  
>*fixed typo in package.json main: `index.js` not `webpack.config.js`*  
>*fixed typo in index.js `document.getElementById('app')`   ("Id")
>--------------------NOT `document.getElementByID('app')`   ("ID")*    

>*added `exclude: /node_modules/` to*  
      `{ test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' }`,  
to remove `npm run webpack` console warning:  
“The code generator has deoptimised the styling of [some file] as it exceeds the max of ”500KB“**  

### `npm run start` script: Part 2 run webpack-dev-server  
add script to package.json *(can delete other 2 scripts!)*  
    "start" : "webpack-dev-server --open"
This will watch for changed files, then auto re-transpile code,
--open tells it to open index.html in the defaut browser.

This module runs a mini express server on localhost:8080
and updates the app on the fly !! :-)  

Note: it only caches the re-build - doesn't write new dist files.  


## .. Pre-Built Scaffold  
Or use the `create-react-app` module to scaffold a new react "app":   

    npm init
    npm install -g create-react-app
    create-react-app app
    cd app
    npm start  
This purportedly replaces all the "From Scratch" steps above !  

## Building the App !  



