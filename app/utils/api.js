var axios = require('axios');

module.exports = {
  fetchPopularRepos: function(language){
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function(response) {
        console.log("api: language:", language);
        console.log("api: response:\n", response);
        console.log("api: response.data.items:\n", response.data.items);
        return response.data.items;
      });
  }
};
  // github search repositories api:
  //  https://developer.github.com/v3/search/#search-repositories

    // search repositories api, where:
    //   has more than 1 star
    //   language is language
    //   sort by number of stars
    //     in descending order

      // Popular is only interested in the `data.items` property
      //  These are the top 30 repos fitting our request.
      //  each "items object" will have: reponame, avatar, username, etc

        // the return value from `axios..then` is passed in as the param
        //   into the Popular's callback function which initiated this request
        //   ie the `.then` part of the fetchPopularRepos() call in Popular.js

// NOTE: for this code to work in Internet Explorer !!
// Console shows: "'Promise' is undefined" error in IE
// Need to pull in an external Bluebird Promise Library, to be able to use Promises (and hence axios) on IE
// Add to index.html head:
//     `<script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>``
// ref: https://stackoverflow.com/questions/36831372/promise-is-undefined-in-ie
