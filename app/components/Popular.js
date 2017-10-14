var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props){
  // might change name to: LanguageMenu or LanguageTabs
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className="languages">
        {languages.map(function(language){
          return (
            <li
              style={language === props.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={props.onSelect.bind(null, language)}
              key={language}>
              {language}
            </li>
          )
        })}
      </ul>
    )
      // Use `bind` on li's onClick handler, to BIND the Language PARAMETER to a New copy of the Function, attaching The new customized Function to the onClick handler for THAT li element.
      // Now, clicking on any <li> element will call setState, with the language value BOUND to that <li> !
      // Note: `null` is passed in as bind's first parameter.  since context `this` is already bound (fron the Popular constuctor).
}


SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};


class Popular extends React.Component{
  constructor(props){
    super();
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this);
    // returns a new function (this.updateLanguage) whose context is always this instance of "Popular" as the `this` inside the updateLanguage function.
  }
  updateLanguage(language){
    this.setState(function() {
      return {
        selectedLanguage: language,
      }
    });
  }
  render(){
    return(
        <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        </div>
    )
  }
}

module.exports = Popular;