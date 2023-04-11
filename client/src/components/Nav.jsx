import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse show" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                    <li className="nav-item">
                        {/* <Link to={"/"}>Go Home</Link> */}
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Logout</a>
                    </li>
                    </ul>
                <span className="navbar-text">
                    Log, Learn & Improve Your Times
                </span>
                </div>
            </div>
            </nav>
            <h1>The Barrel Racer's Logbook</h1>

    </div>
    )
}

export default Nav