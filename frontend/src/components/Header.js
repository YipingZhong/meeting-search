import React from 'react'

class Header extends React.Component{
    render(){
        return (
            <div>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-menu">
                        <div class="navbar-start">
                            <div class="navbar-item" href="https://bulma.io">
                                Home
                            </div>
                        </div>
                    </div>
                </nav>
                <hr class="navbar-divider"></hr>
            </div>
        );
    }
}

export default Header;