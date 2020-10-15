import React from "react";
import Meeting from './Meeting';

class Meetings extends React.Component {
    componentDidMount(){ 
        fetch("http://localhost:3004/calendar").then(response => response.json()).then(data => {
            console.log(data);
        });
    }
    render() {
        return (
            <div className="columns is-multipline is-desktop">
                {
                    this.props.meetings.map(m => {
                        return(
                            <div className="column is-3">
                                <Meeting meeting={m}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Meetings;
