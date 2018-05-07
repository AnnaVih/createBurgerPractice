 import React, { Component } from 'react';
 import Aux from '../../../hoc/Aux/Aux';
 import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }

    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map( ingKey => <li key={ingKey}><span style={{textTransform: 'captalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}</li> );

        return (
            <Aux>   
                <h3>Your body</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    { ingredientsSummary }
                </ul>
                <p><strong>Total price {this.props.price}</strong></p>
                <p> Continue to checkout ? </p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>            
            </Aux>
        );
    }
} 

 export default OrderSummary;