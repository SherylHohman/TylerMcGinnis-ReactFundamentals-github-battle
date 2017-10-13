var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');
// webpack css loaders required for this line to compile
// since this is the entry point of our app, these styles will now be available to our entire app.

class App extends React.Component {
  render(){
    return (
      <div> Hello React ! </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
  );
