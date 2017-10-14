var React = require('react');
var PropTypes = require('prop-types');

class SelectLanguage extends React.Component{
  // would rather call it LanguageMenu or LanguageTabs
  render(){
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className="languages">
        {languages.map(function(language){
          return (
            <li
              style={language === this.props.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={this.props.onSelect.bind(null, language)}
              key={language}>
              {language}
            </li>
          )
        }, this)}
      </ul>
    )
      // now that SelectedLanguage is its own component, - ie it does not live INSIDE the Popular class..
      // `this.updateLanguage` and `this.state.selectedLanguage` are no longer valid references -- that function, and that data live in Popular, not SelectLanguage.
      // So.. we need to pass those values in as `props` FROM Popular TO SelectLanguage.
      // Hence the new references (variable) names are:
      // `this.props.selectedLanguage` (data passed in), and
      // `this.props.updateLanguage` (the function "template" that we will use to create new bound (updateLanguage) functions for each individual li (language))
      // Remember that the "template" updateLanguage function that is passed into this function, is already bound(this variable) to that invocation of the "Popular" component (via its constructor.)
      // Actually.. I'll be passing the bound updateLanguage function in as a prop under the variable name props.onSelect, NOT props.updateLanguage.
      //Since we are passing data in from one Componenet (Popular)down to another Component (SelectLanguage), we need to use PropTypes to ensure the correct data types are being passed.

      // PREVIOUS - when this render method was INSIDE the Popular class

      // map takes a context parameter, so "this" inside map's "function" is the same as "this" of render()
      // so we are passing in `this` so onClick handler has a "defined" value for `this`
      // we use `bind` on our onClick handler, so we can BIND the Language Parameter to a New Function - and attach That Function to the onClick handler for THAT li element.
      //  Thus clicking on any <li> element will call setState, with the language value for that <li> !  Note: `null` is passed in as bind's first parameter.  since context `this` is already bound (fron the constuctor).  At this time, we only need to bind the particular language value.
  }
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
    // returns a new function (this.updateLanguage) whose context is always "Popular" as the `this`
    // So, inside "updateLanguage", `this.setState` is always bound to `this` referring to the Popular component.

    // any reference to updateLanguage is now bound to Popular component as the `this` reference
    // `this.setState` inside updateLanguage:
    //  we cannot know what `this` refers to until it's invoked (left of the dot)
    // but with the `bind` property, we can bind that `this` to always refer to "Popular" component via the above line.
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
      // Notice: we are passing the Popular-bound "updateLanguage" function in under a new nameL onSelect.
      // This name change was not required (this.state.selectedLanguage didn't change names.)
      // But it does highlight its new role, in reference to its new location.
      // Notice also, that its already bound (via the constructor call) to this instance of the Popular class.
      // We do the second set of bindinge - that to and individual language, and list item -- in our SelectedLanguage component, when the li's are rendered.  This is the same as before.

  }
}

module.exports = Popular;