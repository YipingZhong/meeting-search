 import React from 'react'
 import Slack from './Slack'

 class Slacks extends React.Component{

    render(){
        return(
            <div className="display">
                {
                    this.props.slacks.map(s => {
                        return(
                            <Slack slack={s} search={this.props.search}/>
                        )
                    })
                }
            </div>
        );
    }
 }

 export default Slacks;