import React from 'react';

const NavBar = () => {
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <a className="brand-logo" href="/">How To Java</a>
                <ul className="right">
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;