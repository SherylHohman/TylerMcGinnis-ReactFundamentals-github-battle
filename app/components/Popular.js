var React = require('react');

class Popular extends React.Component{
  render(){
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <div>
        {languages.map(function(language){
          return <li key={language}> {language} </li>
        })}
      </div>
    )
  }
}

module.exports = Popular;