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

    PostClientActions.fetchPosts({searchInput: this.state.searchInput});

    this.setState({
      searchInput: "" 
    });
  },

  render: function() {
    return (
      <div className="search-container">
        <img className="search-icon" src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461955020/search_nfktop.jpg" />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search-input"
            value={this.state.searchInput}
            placeholder="Search by Tag"
            onChange={this.updateSearchInput}>
          </input>
        </form>
      </div>
    );
  }
});


module.exports = SearchBar;
