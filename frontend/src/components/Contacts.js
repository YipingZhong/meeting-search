import React from 'react'
import Contact from './Contact'

class Contacts extends React.Component{

    render(){
        return(
            <div className="display">
                <div className="columns">
                    {
                        this.props.contacts.map(c => {
                            return(
                                <div className="column is-one-third">
                                    <Contact contact={c}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Contacts;