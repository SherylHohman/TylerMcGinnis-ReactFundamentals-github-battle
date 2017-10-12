var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');  // webpack css loaders required for this to compile

class App extends React.Component {
  render(){
    return (
      <div> Hello React! </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementByID('app')
  );
