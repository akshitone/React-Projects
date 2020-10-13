import React from 'react';
import burgerLogo from '../../assets/images/logo.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Burger-Builder" />
    </div>
);

export default logo;