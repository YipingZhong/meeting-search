import React from 'react';
import Header from './Header'
import Meetings from './Meetings';

class Home extends React.Component{
    state = {
        meetings: [],
        contacts: [],
        tweets: [],
        dropbox: [],
        slack: [],
        allMeetings: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3004/calendar").then(response => response.json()).then(data => {
            this.setState({
                meetings: data,
                allMeetings: data
            });
        });
        fetch("http://localhost:3004/contacts").then(response => response.json()).then(data => {
            this.setState({
                contacts: data
            });
        });
        fetch("http://localhost:3004/tweet").then(response => response.json()).then(data => {
            this.setState({
                tweets: data
            });
        });
        fetch("http://localhost:3004/dropbox").then(response => response.json()).then(data => {
            this.setState({
                dropbox: data
            });
        });
        fetch("http://localhost:3004/slack").then(response => response.json()).then(data => {
            this.setState({
                slack: data
            });
        });
    }

    search = text => {
        let myMeetings = [...this.state.allMeetings];
        myMeetings = myMeetings.filter(p => {
            const index = p.matching_terms.indexOf(text);
            return index >= 0 || text == "";
        })
        this.setState({
            meetings: myMeetings
        })
        const myContacts = [...this.state.contacts];
        
        const myTweets = [...this.state.tweets];
        const myDropbox = [...this.state.dropbox];
        const mySlack = [...this.state.slack];

    }

    render(){
        return (
            <div>
              <Header search={this.search}/>
              <Meetings meetings={this.state.meetings}/>
            </div>
        );
    }
}

export default Home;