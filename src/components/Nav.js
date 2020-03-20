import React from 'react';
import { ReactComponent as Logo } from './assets/logo-pensando.svg';


import './style.css';


function Nav() {

    return (

        <div className="container">
            <Logo className="logo" />
        </div>
    )
}

export default Nav;
