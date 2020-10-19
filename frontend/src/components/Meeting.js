import React from 'react'

function Meeting(props){

    var moment = require('moment');
    const time = props.meeting.date;
    const [addCalendar, setAddCalendar] = React.useState(false);

    const handleClick = () =>{
        setAddCalendar(!addCalendar);
    }

    return(
        <div className="box">
            <article className="media">
                <div className="media-left">
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.meeting.title}</strong><br />
                            <small>Invitees: {props.meeting.invitees}</small><br />
                            <small>{moment(time).fromNow()}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right" onClick={handleClick}>{addCalendar ? 
                <i className="far fa-calendar-check fa-2x"></i> : <i className="far fa-calendar-plus fa-2x"></i>}</div>
            </article>
        </div>      
    );
}

export default Meeting;