import React from 'react'
import Dropbox from './Dropbox'

class Dropboxs extends React.Component{

    render(){
        return(
            <div className="display">
                <div className="column">
                    {
                        this.props.dropboxs.map(d => {
                            return(
                                <div>
                                    <Dropbox dropbox={d}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Dropboxs;