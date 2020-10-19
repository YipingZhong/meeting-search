import React from "react";
import Meeting from './Meeting';

class Meetings extends React.Component {

    render() {
        return (
            <div className="display">
                {
                    this.props.meetings.map(m => {
                        return(
                            <Meeting meeting={m}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default Meetings;