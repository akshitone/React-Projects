import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';
    const assignedClasses = [];
    
    if (props.showData) {
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>I'm Web Designer and Developer</p>
            <button
            className={btnClass}
            // alt={props.showData}
            onClick={props.toggleMe}>Toggle Me!</button>
        </div>
    )
}

export default cockpit;