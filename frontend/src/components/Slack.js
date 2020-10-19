import React from 'react'

function Slack(props){

    var moment = require("moment");

    const handleMessage = () =>{
        if(props.search === props.slack.author)
            return(
                <div class="msg_container base_sent">
                    <div class="messages msg_sent">
                        <div>{props.slack.message}</div>
                        <time>{props.slack.author}{moment(props.slack.timestamp).fromNow()}</time>
                    </div> 
                    <div className="media-right">
                        <i className="fas fa-user fa-2x"></i>
                    </div>
                </div>
            )
        else
            return(
                <div class="msg_container base_receive">
                    <div className="media-left">
                        <i className="fas fa-user fa-2x"></i>
                    </div>
                    <div class="messages msg_receive">
                        <div>{props.slack.message}</div>
                        <time>{props.slack.author} {moment(props.slack.timestamp).fromNow()}</time>
                    </div>
                </div>
            )
    }

    return(handleMessage());
}

export default Slack;