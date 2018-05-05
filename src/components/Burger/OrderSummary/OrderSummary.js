 import React from 'react';
 import Aux from '../../../hoc/Aux';

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
            <p> Continue to checkout ? </p>
        </Aux>
     )
   
 }

 export default orderSummary;