import React from "react";

function Tweet(props) {
  var moment = require("moment");
  const time = props.tweet.timestamp;

  return (
    <div className="card">
      <div className="card-content">
        <div className="media-content">
          <strong className="is-6">{props.tweet.user}</strong>   <small>{moment(time).fromNow()}</small>
        </div>
        <div>{props.tweet.message}</div>
        <footer>
          <span class="icon has-text-info">
            <i class="far fa-comment-dots"></i>
          </span>
          <span class="icon has-text-success">
            <i class="fas fa-retweet"></i>
          </span>
          <span className="icon has-text-danger">
            <i className="fas fa-heart"></i>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default Tweet;
