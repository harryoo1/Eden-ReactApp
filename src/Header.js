import React from 'react';
import { Fragment } from 'react';
import logo from './logo_eden.png';
import './Header.css';

const Header = function(){
    return(
        <Fragment>
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h4>Eden</h4>
        </div>
        </Fragment>
    )
}
export default Header;