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
    };

    handleKeyDown = e =>{
        if(e.key === "Enter"){
            this.props.search(this.state.searchText)
        }
    };

    handleClick = () => {
        this.props.search(this.state.searchText)
    };

    render(){
        return (
            <div>
                <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-menu is-active">
                        <div className="navbar-start is-shrink center">
                            <div className="navbar-item">
                                <h1><strong>Home</strong></h1>
                            </div>
                            <div className="navbar-item search-box">
                                <input className="input" type="text" placeholder="Search" 
                                value={this.state.searchText} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                            </div>
                            <div className="navbar-item"><button className="button is-light" onClick={this.handleClick} >Search</button></div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;