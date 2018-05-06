 import React from 'react';
 import Aux from '../../../hoc/Aux';
 import Button from '../../UI/Button/Button';

 const orderSummary = ( props ) => {
     const ingredientsSummary = Object.keys(props.ingredients)
        .map( ingKey => <li key={ingKey}><span style={{textTransform: 'captalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}</li> );

     return (
        <Aux>
            <h3>Your body</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                { ingredientsSummary }
            </ul>
            <p><strong>Total price {props.price}</strong></p>
            <p> Continue to checkout ? </p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>            
            
        </Aux>
     )
   
 }

 export default orderSummary;