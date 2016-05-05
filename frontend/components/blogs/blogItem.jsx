var React = require('react');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var HashHistory = require('react-router').hashHistory;

var PostsFeed = React.createClass({
  mixins: [CurrentUserStateMixin],

  textPost: function() {
    return (
            <div>
              <div className="title">{this.props.post.title}</div>
              <div className="body">
                {this.props.post.body}
              </div>
            </div>
    );
  },

  photoPost: function() {
    return (
            <div>
              <img className="blogfeed-photo" src={this.props.post.content_url}></img>
              <div className="body">{this.props.post.body}</div>
            </div>
    );
  },

  quotePost: function() {
    return (
            <div>
              <div className="title">{this.props.post.title}</div>
              <div className="quote-source">-&nbsp;{this.props.post.body}</div>
            </div>
    );
  },

  linkPost: function() {
    return (
            <div>
              <a className="url" href={this.props.post.content_url}>{this.props.post.title}</a>
              <div className="body">{this.props.post.body}</div>
            </div>
    );
  },

  audioPost: function() {
    return (

            <div>

              <audio controls>
                <source src={this.props.post.content_url} type="audio/mpeg"/>
                  Your browser does not support the audio tag.
                </audio>
              <div className="audio-display">
                {this.props.post.body} &nbsp;-&nbsp; {this.props.post.title}
              </div>

            </div>


    );
  },

  videoPost: function() {
    return (
            <div>
              <div className="blogfeed-video">
                <iframe
                  width="340"
                  height="300"
                  src={this.props.post.content_url}
                  frameborder="0"
                  allowFullScreen>
                </iframe>
              </div>
              <div className="title">{this.props.post.title}</div>
              <div className="body">{this.props.post.body}</div>
            </div>
    );
  },

  pushToBlog: function() {
    HashHistory.push('/users/' + this.props.post.author.id);
  },

 	render: function () {
    switch (this.props.post.post_type) {
      case "text":
        var content = this.textPost();
        break;
      case "photo":
        var content = this.photoPost();
        break;
      case "quote":
        var content = this.quotePost();
        break;
      case "link":
        var content = this.linkPost();
        break;
      case "audio":
        var content = this.audioPost();
        break;
      case "video":
        var content = this.videoPost();
        break;
    }


    return (
      <div className="blog-item">
        <div className="post-bar">
          <p className="author" onClick={this.pushToBlog}>
            {this.props.post.author.username}
          </p>
        </div>
        <div className="post-content">

          {content}

          <ul className="blogfeed-tags">
            {this.props.post.tags.map(function(tag){
              return <li className="tag" id={tag.id}>#{tag.tag}</li>;
            })}
          </ul>

        </div>
      </div>
    );
 	}
 });



 module.exports = PostsFeed;
