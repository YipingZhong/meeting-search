import React from "react";
import Modal from "react-awesome-modal";

const moment = require("moment");

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    openModal() {
        console.log("open modal");
        this.setState({
            visible: true,
        });
    }

    closeModal() {
        console.log("close modal");
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <div className="card" onClick={() => this.openModal()}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img
                                src="https://bulma.io/images/placeholders/1280x960.png"
                                alt=""
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.props.contact.name}</p>
                                <p className="subtitle is-6">@{this.props.contact.company}
                                    <p>{moment(this.props.contact.last_contact).fromNow()}</p>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="content">
                            Emails:
                            <div>
                                {this.props.contact.emails.map((c) => {
                                    return <div>{c}</div>;
                                })}
                            </div>
                            Phones:
                            <div>
                                {this.props.contact.phones.map((c) => {
                                    return <div>{c}</div>;
                                })}
                            </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Contact;
