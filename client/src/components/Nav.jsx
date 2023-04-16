import React from 'react';



const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-xl navbar-light bg-light">
            <div class="container-fluid">
                <h4 class="navbar-brand">The Barrel Racer's Logbook</h4>
                <div class="collapse navbar-collapse show" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/" disabled>Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                <span class="navbar-text">
                    Log, Learn & Improve Your Times
                </span>
                </div>
            </div>
            </nav>



    </div>
    )
}

export default Nav