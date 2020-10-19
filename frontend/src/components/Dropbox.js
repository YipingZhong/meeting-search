import React from "react";

function Dropbox(props) {
    var moment = require("moment");
    const type = props.dropbox.path.split(".")[1];

    const getFileIcon = type => {
        switch (type) {
            case "doc":
            case "docx":
                return(
                    <span className = "icon has-text-danger" >
                        <i className="far fa-file-word"></i>
                    </span>
                )
            case "pdf":
                return(
                    <span className = "icon has-text-danger" >
                        <i className="far fa-file-pdf"></i>
                    </span >
                )
            case "excel":
                return(
                    <span className = "icon has-text-danger" >
                        <i className="far fa-file-excel"></i>
                    </span >
                )
            default:
                return(
                    <span className = "icon has-text-danger" >
                        <i className="far fa-file"></i>
                    </span >
                )
    }
}

    return (
        <div>
            <div className="columns center">
                <div className="column">{getFileIcon(type)}{props.dropbox.title}</div>
                <div className="column">{moment(props.dropbox.created).format('L')}</div>
                <div>
                    <span className="icon has-text-info">
                        <i className="fas fa-download"></i>
                    </span>
                </div>
            </div>
            {/* <hr className="hr-nomargin"/> */}
        </div>
    );
}

export default Dropbox;
