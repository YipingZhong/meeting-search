import React from "react";
import Header from "./Header";
import Meetings from "./Meetings";
import Contacts from "./Contacts";
import Tweets from "./Tweets";
import Dropboxs from "./Dropboxs";
import Slacks from "./Slacks";

class Home extends React.Component {
    state = {
        search: "",
        meetings: [],
        contacts: [],
        tweets: [],
        dropboxs: [],
        slacks: [],
        allMeetings: [],
        allContacts: [],
        allTweets: [],
        allDropboxs: [],
        allSlacks: [],
    };

    componentDidMount() {
        var arr = [
            fetch("http://localhost:3004/calendar")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        meetings: data,
                        allMeetings: data,
                    });
                }),
            fetch("http://localhost:3004/contacts")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        contacts: data,
                        allContacts: data,
                    });
                }),
            fetch("http://localhost:3004/tweet")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        tweets: data,
                        allTweets: data,
                    });
                }),
            fetch("http://localhost:3004/dropbox")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        dropboxs: data,
                        allDropboxs: data,
                    });
                }),
            fetch("http://localhost:3004/slack")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        slacks: data,
                        allSlacks: data,
                    });
                })
        ];
        Promise.all(arr).then(() => this.search(""));
    }

    searchHelper = (array, text) =>{
        let input = text.split(" ");
        let freqMap = new Map(); 
        array.forEach(a => {
            let freq = 0;
            input.forEach(e => {
                const index = a.matching_terms.indexOf(e);
                if(index >= 0 || text === ""){
                    freq++;
                }
            })
            if(freq > 0){
                freqMap.set(a, freq);
            }
        });
        freqMap = new Map([...freqMap.entries()].sort((a, b) => b[1] - a[1]));
        return Array.from(freqMap.keys());
    }

    search = (text) => {
        text = text.toLowerCase();
        this.setState({
            search: text,
        });
        let myMeetings = this.searchHelper(this.state.allMeetings, text);
        myMeetings = this.rankMeeting(myMeetings);
        let myContacts = this.searchHelper(this.state.allContacts, text);
        let myTweets = this.searchHelper(this.state.allTweets, text);
        let myDropbox = this.searchHelper(this.state.allDropboxs, text);
        let mySlack = this.searchHelper(this.state.allSlacks, text);
        this.setState({
            meetings: myMeetings,
            contacts: myContacts,
            tweets: myTweets,
            dropboxs: myDropbox,
            slacks: mySlack,
        });
    };

    rankMeeting = (meetings) => {
        console.log(meetings);
        let upcoming = [];
        let past = [];
        meetings.forEach(m => {
            let time = new Date(m.date).getTime();
            let cur = new Date().getTime();
            if(time < cur){
                past.push({timestamp: time-cur, meeting: m});
            }
            else{
                upcoming.push({timestamp: time-cur, meeting: m});
            }
        });
        upcoming.sort((a, b) => a.timestamp - b.timestamp);
        past.sort((a, b) => b.timestamp - a.timestamp);
        return [...upcoming, ...past].map(o => o.meeting);
    }

    render() {
        return (
            <div>
                <div>
                    <Header search={this.search} />
                </div>
                <div className="columns">
                    <div className="column is-one-fifth fixed-menu">
                        <aside className="menu">
                            <ul class="menu-list">
                                <li><a href="#meetings">Meetings</a></li>
                                <li><a href="#contacts">Contacts</a></li>
                                <li><a href="#tweets">Tweets</a></li>
                                <li><a href="#dropboxs">Dropboxs</a></li>
                                <li><a href="#slacks">Slacks</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="column search-result">
                        <a className="anchor" name="meetings"><Meetings meetings={this.state.meetings} /></a>
                        <a className="anchor" name="contacts"><Contacts contacts={this.state.contacts} /></a>
                        <a className="anchor" name="tweets"><Tweets tweets={this.state.tweets} /></a>
                        <a className="anchor" name="dropboxs"><Dropboxs dropboxs={this.state.dropboxs} /></a>
                        <a className="anchor" name="slacks"><Slacks slacks={this.state.slacks} search={this.state.search} /></a>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Home;
