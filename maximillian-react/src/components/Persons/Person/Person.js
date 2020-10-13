import React, {Fragment} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
const person = ( props ) => {
    return(
        <Aux>
            <p onClick={props.clickme}>
                I'm {props.name} and {props.age} years old. 
                <span>{props.children}</span>
            </p>
            <input type="text" onChange={props.changeme} value={props.name}></input>
        </Aux>
    )
}

export default person;