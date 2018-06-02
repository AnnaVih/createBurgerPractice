import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';
const checkoutSummary = (props) => {
    
    return (
        <div className={classes.CheckoutSummary}>
            <h1 onClick={props.checkoutContinued}>We hope it tastes well</h1>
            <div style={{width:'100%', height: '300px', margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
                <Button
                    clicked={props.checkoutCancelled}
                    btnType="Danger">Cancelll</Button>
                <Button 
                    clicked={props.checkoutContinued}
                    btnType="Success">Continue</Button>
            </div>
           
    
        </div>
    )

}

export default checkoutSummary;