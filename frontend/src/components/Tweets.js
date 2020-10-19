import React from "react";
import ReactDOM from "react-dom"
import Tweet from "./Tweet";

class Tweets extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state={
            tweets: [...props.tweets],
            end: false
        }
        this.twitterScroll = null;
        this.setTwitterScrollRef = element => {
          this.twitterScroll = element;
        };
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.twitterScroll).addEventListener(
            "scroll",
            this.listenScrollEvent
        );
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this.twitterScroll).removeEventListener(
            "scroll",
            this.listenScrollEvent
        );
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.tweets !== prevProps.tweets) {
            this.setState({
                tweets: [...this.props.tweets]
            });
        }
    }

    listenScrollEvent(event) {
        let el = event.target;
        if(el.scrollHeight - el.scrollTop - el.clientHeight < 1){
            if(this.state.tweets.length >= 20){
                this.setState({
                    end: true
                })
            }
            else{
                let newTweet = this.generateRandomTweet();
                this.state.tweets.push(newTweet);
                this.setState({
                    tweets: this.state.tweets
                });
            }
        }
    }

    generateRandomTweet = () => {
        return {
            user: Math.random().toString(36).substring(7),
            message: Math.random().toString(36).substring(1),
            timestamp: new Date(),
            matching_terms: ["random"]
        };
    }

    render() {
        return (
            <div className="display">
                <div class="panel-body msg_container_base" ref={this.setTwitterScrollRef}>
                    {this.state.tweets.map((t) => <Tweet tweet={t}/>)}
                    {this.state.end ? <div style={{textAlign: "center"}}>You have reached the end of tweets</div> : <div />}
                </div>
            </div>
        );
    }
}

export default Tweets;
