import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];
     for (let ingredientName in props.ingredients) {
         ingredients.push({
             name: ingredientName,
             amount: props.ingredients[ingredientName]
         })
     }

     const ingredientOutput = ingredients.map(ig => {
        return <span 
            key={ig.name}
            style={{
                textTransform: 'capitalize',
                fontWeight: 'normal',
                display: 'inline-block',
                margin: '0px 5px',
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px'
            }}>
                {ig.name} ({ig.amount}) 
            </span>
     })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput} </p>
            <p>Price: <strong>&#8377; {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default order;