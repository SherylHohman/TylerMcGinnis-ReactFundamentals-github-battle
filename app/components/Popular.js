var React = require('react');

class Popular extends React.Component{

  constructor(props){
    super(props);
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
        selectedLanguage: language
      }
    })
  }

  render(){
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className="languages">
        {languages.map(function(language){
          return (
            <li
              style={language === this.state.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={this.updateLanguage.bind(null, language)}
              key={language}
              >
              {language}
            </li>
          )
        }, this)}
      </ul>
      // map takes a context parameter, so "this" inside map's "function" is the same as "this" of render()
      // so we are passing in `this` so onClick handler has a "defined" value for `this`
      // we use `bind` on our onClick handler, so we can BIND the Language Parameter to a New Function - and attach That Function to the onClick handler for THAT li element.
      //  Thus clicking on any <li> element will call setState, with the language value for that <li> !  Note: `null` is passed in as bind's first parameter.  since context `this` is already bound (fron the constuctor).  At this time, we only need to bind the particular language value.
    )
  }
}

module.exports = Popular;