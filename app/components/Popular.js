var React = require('react');
var PropTypes = require('prop-types');
var api  = require('../utils/api.js');

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
  // onSelect holds the github api request for the currently selected language (well the function that calls the api, and gives us back our data)

class Popular extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }
    this.updateLanguage = this.updateLanguage.bind(this);
    // returns a new function (this.updateLanguage) whose context is always this instance of "Popular" as the `this` inside the updateLanguage function.
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language){
    this.setState(function() {
      return {
        selectedLanguage: language,
      }
    });
    api.fetchPopularRepos(language)
      .then(function(repos){
        console.log("Popular _", language, "_ repos:\n", repos);
        // to display the data in our view/component/webpage
        // we need to call "setState" - that's what triggers a UI re-Render
        // (for now we'll simply render a string representation of the  `repos` object)
        this.setState(function(){
          return {
            repos: repos,
          }
        })
    }.bind(this));
          // REM to BIND this context to function returned/"passed into" `.then`, AND pass that in as 2nd parameter to `.then`, else `this.setState` will be undefined
          // our api function must be bound

  }

  render(){
    return(
        <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {JSON.stringify(this.state.repos, ['name'], '\n')}

        </div>
    )
    // JSON stringify will turn the data from our api call into a string
    //  so we can view in in our component/webpage.
    //  this is temporary - in next step we'll use JSX instead
    //  the 2nd, 3rd params are for formatting our string
        // {JSON.stringify(this.state.repos, null, 2)}
        // {JSON.stringify(this.state.repos)}
  }
}

module.exports = Popular;