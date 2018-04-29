import React, { Component } from 'react';
import { createComponent } from 'react-fela';

const BreadBottom = createComponent(
    () => ({
        background:
            "linear-gradient(#F08E4A, #e27b36)",
        height: "13%",
        width: "80%",
        borderRadius: "0 0 30px 30px",
        boxShadow: "inset -15px 0 #c15711",
        margin: "2% auto"
    }),
    "div"
);

const BreadTop = createComponent(
    () => ({
        background:
            "linear-gradient(#bc581e, #e27b36)",
        height: "20%",
        width: "80%",
        borderRadius: "50% 50% 0 0",
        boxShadow: "inset -15px 0 #c15711",
        margin: "2% auto",
        position: "relative"
    }),
    "div"
);

const Seeds1 = createComponent(
    () => ({
        backgroundColor: "white",
        height: "15%",
        width: "10%",
        left: "30%",
        top: "50%",
        borderRadius: "40%",
        boxShadow: "inset -2px -3px #c9c9c9",
        margin: "2% auto",
        transform: "rotate(-20deg)",
        position: "absolute",
        ":after": {
            content: '" "',
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "white",
            left: "-170%",
            top: "-260%",
            borderRadius: "40%",
            transform: "rotate(60deg)",
            boxShadow: "inset -1px 2px #c9c9c9"
        },
        ":before": {
            content: '" "',
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "white",
            left: "180%",
            top: "-50%",
            borderRadius: "40%",
            transform: "rotate(60deg)",
            boxShadow: "inset -1px -3px #c9c9c9"
        }
    }),
    "div"
);

const Seeds2 = createComponent(
    () => ({
        backgroundColor: "white",
        height: "15%",
        width: "10%",
        left: "64%",
        top: "50%",
        borderRadius: "40%",
        boxShadow: "inset -3px 0 #c9c9c9",
        transform: "rotate(10deg)",
        position: "absolute",
        ":before": {
            content: '" "',
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "white",
            left: "150%",
            top: "-130%",
            borderRadius: "40%",
            transform: "rotate(90deg)",
            boxShadow: "inset 1px 3px #c9c9c9"
        }
    }),
    "div"
);

const Meat = createComponent(
    () => ({
        width: "80%",
        height: "8%",
        background: "linear-gradient(#7f3608, #702e05)",
        margin: "2% auto",
        borderRadius: "15px"
        }),
    "div"
);

const Cheese = createComponent(
    () => ({
        width: "90%",
        height: "4.5%",
        background: "linear-gradient(#f4d004, #d6bb22)",
        margin: "2% auto",
        borderRadius: "20px"
        }),
    "div"
);

const Salad = createComponent(
    () => ({
        width: "85%",
        height: "7%",
        background: "linear-gradient(#228c1d, #91ce50)",
        margin: "2% auto",
        borderRadius: "20px"
        }),
    "div"
);

const Bacon = createComponent(
    () => ({
        width: "80%",
        height: "3%",
        background: "linear-gradient(#bf3813, #c45e38)",
        margin: "2% auto"
        }),
    "div"
);


const burgerIngredient = (props) => {
    let ingredient = null;

    switch ( props.type ) {
        case ( 'bread-bottom' ):
            ingredient = <BreadBottom></BreadBottom>
            break;
        case ( 'bread-top' ):
            ingredient = <BreadTop>
                            <Seeds1></Seeds1>
                            <Seeds2></Seeds2>
                        </BreadTop>
            break;
        case ( 'meat' ):
            ingredient = <Meat></Meat>
            break;
        case ( 'cheese' ):
            ingredient = <Cheese></Cheese>
            break;
        case ( 'salad' ):
            ingredient = <Salad></Salad>
            break;
        case ( 'bacon' ):
            ingredient = <Bacon></Bacon>
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default burgerIngredient;