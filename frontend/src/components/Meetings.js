import React from "react";
import Meeting from './Meeting';

class Meetings extends React.Component {
    render() {
        return (
            <body>
                <section class="section">
                <div class="container">
                    <h1 class="title">Meetings</h1>
                    <Meeting name="singleMeeting"/>
                </div>
                </section>
            </body>
        );
    }
}

export default Meetings;
