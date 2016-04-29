var React = require('react');
var PostClientActions = require('../../actions/posts/postClientActions');

var SearchBar = React.createClass({
  getInitialState: function() {
    return {
      searchInput: ""
    };
  },

  updateSearchInput: function(e) {
    this.setState({
      searchInput: e.target.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    // TODO: does this need to be a separate method?? or should it just
    // call fetchPosts and then the filtering will occur in the backend?

    PostClientActions.fetchSearchedPosts({
      searchInput: this.state.searchInput
    });

    this.setState({
      searchInput: ""
    });
  },

  render: function() {
    return (
      <div>
        <input type="text" value={this.state.searchInput}
          placeholder="Search by Tag" onChange={this.updateSearchInput}></input>
      </div>
    );
  }
});


module.exports = SearchBar;
