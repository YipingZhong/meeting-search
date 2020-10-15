import React from 'react'

class Header extends React.Component{

    state = {
        searchText: ''
    };

    handleChange = e => {
        const value = e.target.value
        this.setState({
            searchText: value
        })
        this.props.search(value)
    };

    render(){
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item" href="https://bulma.io">Home</div>
                            <div className="navbar-item">
                                <input className="input" type="text" placeholder="Search" value={this.state.searchText} onChange={this.handleChange}/>
                            </div>
                            <div className="navbar-item"><button>Go</button></div>
                        </div>
                    </div>
                </nav>
                <hr className="navbar-divider"></hr>
            </div>
        );
    }
}

export default Header;