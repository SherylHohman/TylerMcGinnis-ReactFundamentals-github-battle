GitHub-Battle  

React-Tutorial  
https://learn.tylermcginnis.com/courses  
React Fundamentals Course  
https://github.com/tylermcginnis/React-Fundamentals  

my github repo for this project is :  
https://github.com/SherylHohman/TylerMcGinnis-ReactFundamentals-github-battle  

## Getting Started - From Scratch    

### add app dependencies | init as a node project (app)   
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

### add dev dependencies: webpack, babel, loaders, dev-server, html-webpack      
Fourth command:      

    npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server  


## Pre-Built Scaffold
Conversely, could instead: (replace my-app with app to match above folder)  

    npm init
    npm install -g create-react-app
    create-react-app my-app
    cd my-app
    npm start




