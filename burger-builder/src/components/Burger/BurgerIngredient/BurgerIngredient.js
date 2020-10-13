import React, { Component } from 'react';
import PropType from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        let indegredient = null;
    
        switch (this.props.type) {
            case ('bread-bottom'):
                indegredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                indegredient = ( 
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                indegredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                indegredient = <div className={classes.Cheese}></div>;
                break;
            case ('bacon'):
                indegredient = <div className={classes.Bacon}></div>;
                break;
            case ('salad'):
                indegredient = <div className={classes.Salad}></div>;
                break;
            default:
                indegredient = null;
        }

        return indegredient;
    }
} 

BurgerIngredient.propTypes = {
    type: PropType.string.isRequired
}

export default BurgerIngredient;