import React, {Component} from 'react';

import classes from './ContactData.css';
import axios from '../../../axios-order';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Anna Vihrogonova',
                address: {
                    street: 'Oakdene 1',
                    zipCode: '22222',
                    country: 'Uk'
                },
                email: 'bla@bla.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false})
                this.props.history.push('/');
            })
            .catch(error => {this.setState({ loading: false})
            });
    }

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
            <input className={classes.Input} type="email" name="email" placeholder="Your email"/>
            <input className={classes.Input} type="text" name="street" placeholder="Street"/>   
            <input className={classes.Input} type="text" name="postal" placeholder="Postal code"/>   
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>                                                                                              
        </form>);

        if(this.state.loading){
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;