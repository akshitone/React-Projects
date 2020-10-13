import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Burger Price: <strong>&#8377;{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                added={() => props.ingredientsAdded(ctrl.type)} 
                removed={() => props.ingredientsRemoved(ctrl.type)} 
                key={ctrl.label} 
                label={ctrl.label} 
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}><strong> { props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER' } </strong></button>
    </div>
);

export default buildControls;